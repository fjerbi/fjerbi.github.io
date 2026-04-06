'use client';
import { ProjectType } from '@/lib/types';

import { Icon } from '@iconify/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import ImageCarousel from './ImageCarousel';


interface ProjectModalProps {
  project: ProjectType | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-bg dark:bg-bg-secondary rounded-xl shadow-2xl pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-bg-secondary/80 dark:bg-bg/80 hover:bg-accent hover:text-white transition-all duration-200"
                aria-label="Close modal"
              >
                <Icon icon="lucide:x" width={24} height={24} />
              </button>

              {/* Project Image Carousel */}
              <ImageCarousel
                images={project.images || [project.img]}
                alt={project.name}
              />

              {/* Content */}
              <div className="p-6 sm:p-8 -mt-16 relative">
                {/* Title and Year */}
                <div className="mb-4">
                  <h2 className="text-2xl sm:text-3xl font-bold text-text mb-2">
                    {project.name}
                  </h2>
                  <span className="inline-block px-3 py-1 text-sm font-mono bg-accent/10 text-accent rounded-full">
                    {project.year}
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Description */}
                {project.description && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2 text-text">About</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                )}

                {/* Features */}
                {project.features && project.features.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3 text-text">Key Features</h3>
                    <ul className="space-y-2">
                      {project.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-slate-600 dark:text-slate-400"
                        >
                          <Icon
                            icon="lucide:check-circle"
                            className="flex-shrink-0 mt-0.5 text-accent"
                            width={18}
                            height={18}
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                  {project.url !== '#' && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors"
                    >
                      <Icon icon="lucide:external-link" width={18} height={18} />
                      Live Demo
                    </a>
                  )}
                  {project.repo !== '#' && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-lg font-medium hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
                    >
                      <Icon icon="tabler:brand-github" width={18} height={18} />
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
