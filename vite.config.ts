import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import {defineConfig, Plugin} from 'vite';

function portraitUploadPlugin(): Plugin {
  return {
    name: 'portrait-upload-api',
    configureServer(server) {
      server.middlewares.use('/api/upload-portrait', (req, res, next) => {
        if (req.method === 'POST') {
          let body = '';
          req.on('data', chunk => {
            body += chunk;
          });
          req.on('end', () => {
            try {
              const { filename, base64 } = JSON.parse(body);
              if (!filename || !base64) {
                res.statusCode = 400;
                res.end(JSON.stringify({ error: 'Missing filename or base64' }));
                return;
              }
              const cleanName = path.basename(filename);
              const lowerName = cleanName.toLowerCase();
              const base64Data = base64.replace(/^data:image\/\w+;base64,/, '');
              const buffer = Buffer.from(base64Data, 'base64');

              const dirs = [
                path.resolve(process.cwd(), 'public'),
                path.resolve(process.cwd(), 'dist'),
                path.resolve(process.cwd(), 'src/assets/images'),
              ];

              for (const dir of dirs) {
                if (!fs.existsSync(dir)) {
                  fs.mkdirSync(dir, { recursive: true });
                }
                fs.writeFileSync(path.join(dir, cleanName), buffer);
                if (lowerName !== cleanName) {
                  fs.writeFileSync(path.join(dir, lowerName), buffer);
                }
              }

              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: true, url: `/${cleanName}` }));
            } catch (err: any) {
              res.statusCode = 500;
              res.end(JSON.stringify({ error: err.message }));
            }
          });
        } else {
          next();
        }
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), portraitUploadPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
