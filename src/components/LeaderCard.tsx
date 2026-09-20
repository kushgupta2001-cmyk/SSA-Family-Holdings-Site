import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Linkedin, Camera, Check, UploadCloud } from 'lucide-react';
import { ExtendedLeadershipMember } from '../data/aboutData';
import { PedigreeLogo } from './PedigreeLogos';

interface LeaderCardProps {
  member: ExtendedLeadershipMember;
  index: number;
}

export const LeaderCard: React.FC<LeaderCardProps> = ({ member, index }) => {
  const storageKey = `sgre_portrait_${member.name}`;
  
  // State for image source
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

  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [triedAlternative, setTriedAlternative] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Check if localStorage has a saved portrait
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      setCurrentSrc(saved);
      setIsCustomPhoto(true);
    }
  }, [storageKey]);

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
      try {
        localStorage.setItem(storageKey, dataUrl);
      } catch {
        // Ignore quota limits if image is large
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
    // If the main image path (e.g., /Sanjay.jpg) fails:
    if (!triedAlternative) {
      setTriedAlternative(true);
      // Try lowercase variant first
      const lower = member.image.toLowerCase();
      if (lower !== member.image) {
        setCurrentSrc(lower);
        return;
      }
    }
    // Fall back to the guaranteed asset image if file isn't uploaded yet
    if (member.fallbackImage && currentSrc !== member.fallbackImage) {
      setCurrentSrc(member.fallbackImage);
    }
  };

  return (
    <motion.div
      id={`leader-card-${member.name.toLowerCase().replace(/\s+/g, '-')}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className={`flex flex-col p-8 transition-transform duration-500 hover:-translate-y-1 relative group ${
        index === 1 
          ? 'bg-[#f2f6f4] lg:mt-16' // Staggered middle column
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

        {/* Portrait Container with Drag & Drop */}
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`overflow-hidden aspect-[4/5] mb-6 relative rounded-sm ${
            index !== 1 ? 'p-1 bg-white shadow-sm' : ''
          } ${isDragging ? 'ring-2 ring-[#c59e5f] ring-offset-2' : ''}`}
        >
          <div className="absolute inset-0 bg-[#1a382d]/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />

          {/* Actual Image */}
          <img
            src={currentSrc}
            alt={`${member.name} - ${member.role}`}
            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={handleImageError}
          />

          {/* Drag & Drop Overlay */}
          {isDragging && (
            <div className="absolute inset-0 bg-[#1a382d]/85 text-white z-20 flex flex-col items-center justify-center p-4 text-center backdrop-blur-xs">
              <UploadCloud className="w-10 h-10 text-[#c59e5f] animate-bounce mb-2" />
              <span className="text-xs font-semibold uppercase tracking-wider">
                Drop to set official photo
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
                <span>Original photo loaded</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Subtle Custom Photo Indicator Badge */}
          {isCustomPhoto && !uploadSuccess && (
            <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs text-[#1a382d] text-[10px] font-mono font-medium px-2 py-0.5 rounded border border-[#1a382d]/15 z-20 shadow-xs">
              Original Photo
            </div>
          )}

          {/* Interactive Upload Button Overlay (Appears on Hover) */}
          <div className="absolute bottom-3 right-3 z-20 opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity duration-300">
            <button
              type="button"
              id={`upload-btn-${member.name.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => fileInputRef.current?.click()}
              disabled={isUploading}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-[#10241d]/90 hover:bg-[#10241d] text-white text-[11px] font-medium rounded shadow-md backdrop-blur-sm border border-white/20 hover:border-[#c59e5f] transition-all cursor-pointer"
              title="Click or drag-and-drop to upload your exact photo"
            >
              <Camera size={13} className="text-[#c59e5f]" />
              <span>{isUploading ? 'Loading...' : isCustomPhoto ? 'Change Photo' : 'Upload Photo'}</span>
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
