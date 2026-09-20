import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Linkedin, Camera, Check, UploadCloud, User } from 'lucide-react';
import { ExtendedLeadershipMember } from '../data/aboutData';
import { PedigreeLogo } from './PedigreeLogos';

interface LeaderCardProps {
  member: ExtendedLeadershipMember;
  index: number;
}

export const LeaderCard: React.FC<LeaderCardProps> = ({ member, index }) => {
  const storageKey = `sgre_portrait_${member.name}`;

  const [currentSrc, setCurrentSrc] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(storageKey);
      if (saved) return saved;
    }
    return member.image;
  });

  const [isCustomPhoto, setIsCustomPhoto] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return Boolean(localStorage.getItem(storageKey));
    }
    return false;
  });

  const [hasError, setHasError] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [triedAlternative, setTriedAlternative] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      setCurrentSrc(saved);
      setIsCustomPhoto(true);
      setHasError(false);
    }
  }, [storageKey]);

  useEffect(() => {
    const handlePortraitSync = (e: any) => {
      if (e.detail?.name === member.name && e.detail?.dataUrl) {
        setCurrentSrc(e.detail.dataUrl);
        setIsCustomPhoto(true);
        setHasError(false);
        setUploadSuccess(true);
        setTimeout(() => setUploadSuccess(false), 3500);
      }
    };
    window.addEventListener('portrait-updated', handlePortraitSync);
    return () => window.removeEventListener('portrait-updated', handlePortraitSync);
  }, [member.name]);

  const handleFileProcess = (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file (PNG, JPG, JPEG, WEBP).');
      return;
    }

    setIsUploading(true);
    const reader = new FileReader();

    reader.onload = async (e) => {
      const dataUrl = e.target?.result as string;
      if (!dataUrl) {
        setIsUploading(false);
        return;
      }

      // Immediately display and save in browser
      setCurrentSrc(dataUrl);
      setIsCustomPhoto(true);
      setHasError(false);
      try {
        localStorage.setItem(storageKey, dataUrl);
      } catch {
        // Ignore storage quota limits
      }

      // Also persist to server in public directory
      const targetFilename = member.defaultFilename || `${member.name.toLowerCase().replace(/\s+/g, '_')}.png`;
      try {
        await fetch('/api/upload-portrait', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            filename: targetFilename,
            base64: dataUrl,
          }),
        });
      } catch (err) {
        console.warn('Could not sync to server disk:', err);
      }

      setIsUploading(false);
      setUploadSuccess(true);
      setTimeout(() => setUploadSuccess(false), 3500);
    };

    reader.onerror = () => {
      setIsUploading(false);
    };

    reader.readAsDataURL(file);
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileProcess(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleFileProcess(file);
    }
  };

  const handleImageError = () => {
    // If original case path fails, try lowercase variant once
    if (!triedAlternative) {
      setTriedAlternative(true);
      const lower = member.image.toLowerCase();
      if (lower !== member.image) {
        setCurrentSrc(lower);
        return;
      }
    }
    // If not found, show distinguished monogram placeholder instead of fake AI faces
    setHasError(true);
  };

  return (
    <motion.div
      id={`leader-card-${member.name.toLowerCase().replace(/\s+/g, '-')}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className={`flex flex-col p-7 sm:p-8 transition-transform duration-500 hover:-translate-y-1 relative group ${
        index === 1
          ? 'bg-[#f2f6f4] lg:mt-12' // Subtle staggered middle column
          : 'bg-white shadow-[0_4px_24px_rgba(26,56,45,0.03)] hover:shadow-[0_16px_60px_rgba(26,56,45,0.08)]'
      }`}
    >
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 ${
          index === 1 ? 'bg-white shadow-[0_16px_60px_rgba(26,56,45,0.08)]' : 'bg-[#f8faf8]'
        }`}
      />

      <div className="relative z-10 flex flex-col h-full">
        {/* Hidden File Input */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/png,image/jpeg,image/jpg,image/webp"
          className="hidden"
          onChange={handleFileInputChange}
          aria-label={`Upload photo for ${member.name}`}
        />

        {/* 
          Restrained, Elegant Portrait Frame:
          Sized conservatively (max-w-[250px], h-[270px]) so square crops (Agam, Kushagra)
          and vertical shots (Sanjay) fit naturally without excessive cropping or blur.
          No tinting, no color overlay, completely unedited original photo presentation.
        */}
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`w-full max-w-[250px] mx-auto h-[260px] sm:h-[280px] mb-6 relative rounded-xs overflow-hidden bg-[#f4f7f5] border border-[#e2ece6] shadow-[0_2px_12px_rgba(26,56,45,0.04)] flex items-center justify-center ${
            isDragging ? 'ring-2 ring-[#c59e5f] ring-offset-2' : ''
          }`}
        >
          {!hasError ? (
            <img
              src={currentSrc}
              alt={`${member.name} - ${member.role}`}
              className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
              loading="eager"
              referrerPolicy="no-referrer"
              onError={handleImageError}
            />
          ) : (
            /* Distinguished Executive Placeholder (Zero AI Hallucinations) */
            <div
              onClick={() => fileInputRef.current?.click()}
              className="w-full h-full flex flex-col items-center justify-center p-6 text-center cursor-pointer bg-gradient-to-b from-[#f9fbf9] to-[#ebf3ee] hover:bg-[#edf5f0] transition-colors"
              title={`Click or drop ${member.defaultFilename} here`}
            >
              <div className="w-16 h-16 rounded-full border border-[#c59e5f]/50 bg-white flex items-center justify-center text-[#10241d] font-serif text-2xl font-normal mb-3 shadow-xs">
                {member.initials}
              </div>
              <span className="font-serif text-sm font-medium text-[#10241d] mb-1">
                {member.name}
              </span>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#9d7736] mb-3">
                {member.defaultFilename}
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] text-[#1a382d] bg-white border border-[#1a382d]/20 px-2.5 py-1 rounded shadow-2xs font-medium hover:border-[#c59e5f]">
                <Camera size={12} className="text-[#c59e5f]" />
                <span>Select or Drop Photo</span>
              </span>
            </div>
          )}

          {/* Drag & Drop Hover Overlay */}
          {isDragging && (
            <div className="absolute inset-0 bg-[#10241d]/90 text-white z-20 flex flex-col items-center justify-center p-4 text-center backdrop-blur-xs">
              <UploadCloud className="w-9 h-9 text-[#c59e5f] animate-bounce mb-2" />
              <span className="text-xs font-semibold uppercase tracking-wider">
                Drop to attach {member.defaultFilename}
              </span>
            </div>
          )}

          {/* Upload Status Toast */}
          <AnimatePresence>
            {uploadSuccess && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="absolute top-3 left-3 right-3 bg-[#10241d] text-white px-3 py-1.5 rounded text-[11px] font-medium flex items-center justify-center gap-1.5 z-25 shadow-lg border border-[#c59e5f]/30"
              >
                <Check size={13} className="text-[#86bc25]" />
                <span>Original photo active</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Subtle Indicator Badge */}
          {isCustomPhoto && !uploadSuccess && !hasError && (
            <div className="absolute top-2.5 right-2.5 bg-white/95 backdrop-blur-xs text-[#1a382d] text-[10px] font-mono font-medium px-2 py-0.5 rounded border border-[#1a382d]/15 z-20 shadow-xs">
              Official Photo
            </div>
          )}

          {/* Change / Upload Button (Reveals on Hover) */}
          <div className="absolute bottom-2.5 right-2.5 z-20 opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity duration-300">
            <button
              type="button"
              id={`upload-btn-${member.name.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => fileInputRef.current?.click()}
              disabled={isUploading}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#10241d]/90 hover:bg-[#10241d] text-white text-[10px] font-medium rounded shadow-md backdrop-blur-sm border border-white/20 hover:border-[#c59e5f] transition-all cursor-pointer"
              title={`Click to set ${member.defaultFilename}`}
            >
              <Camera size={11} className="text-[#c59e5f]" />
              <span>{isUploading ? 'Loading...' : isCustomPhoto ? 'Update' : 'Attach'}</span>
            </button>
          </div>
        </div>

        {/* Role & Name */}
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#c59e5f] font-semibold">
            {member.role}
          </span>
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name} LinkedIn Profile`}
            className="text-[#1a382d] hover:text-[#c59e5f] transition-colors p-1"
          >
            <Linkedin size={16} />
          </a>
        </div>

        <h3 className="font-serif text-2xl text-[#1a382d] font-normal mb-1">
          {member.name}
        </h3>

        <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-5">
          {member.focus}
        </div>

        {/* Bio */}
        <p className="text-sm leading-relaxed text-neutral-600 mb-6 flex-1 font-light">
          {member.bio}
        </p>

        {/* Pedigree & Affiliation Logos */}
        {member.pedigreeLogos && member.pedigreeLogos.length > 0 && (
          <div className="pt-5 border-t border-neutral-200/80">
            <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-neutral-400 block mb-3">
              BACKGROUND &amp; AFFILIATIONS
            </span>
            <div className="flex flex-wrap items-center gap-3">
              {member.pedigreeLogos.map((logoKey) => (
                <div key={logoKey} className="transition-transform duration-200 hover:-translate-y-0.5">
                  <PedigreeLogo name={logoKey} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};
