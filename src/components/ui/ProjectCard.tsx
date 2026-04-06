'use client';
import { ProjectType } from '@/lib/types';
import { blurImageURL } from '@/lib/utils/config';

import { Icon } from '@iconify/react';
import { motion, MotionProps } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const ProjectCard = ({
  name,
  url,
  repo,
  year,
  img,
  tags,
  onClick,
  ...rest
}: ProjectType & MotionProps & { onClick?: () => void }) => {
  // To avoid hydration failed error
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <motion.div {...rest} className="w-full max-w-[500px] sm:max-w-[550px] md:max-w-[600px] lg:max-w-[650px]">
      <button
        onClick={onClick}
        className="block w-full overflow-hidden transition-all duration-200 rounded-xl shadow-xl group bg-bg-secondary dark:shadow-2xl hover:shadow-2xl hover:-translate-y-1"
      >
        <div className="overflow-hidden h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
          <Image
            src={img}
            alt={name}
            width={800}
            height={800}
            placeholder="blur"
            blurDataURL={blurImageURL}
            className="object-contain w-full h-full transition-all duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-5 py-4 space-y-2">
          <div className="flex items-center justify-between">
            <p className="font-mono text-xs sm:text-sm capitalize text-slate-500 dark:text-slate-400">{tags.join(' | ')}</p>
            <div className="flex items-center space-x-2">
              {repo !== '#' && (
                <a
                  href={repo}
                  onClick={(e) => e.stopPropagation()}
                  className="block p-1.5 rounded-full duration-200 hover:text-accent hover:bg-accent/10"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon icon="tabler:brand-github" width={22} height={22} />
                </a>
              )}
              {url !== '#' && (
                <a
                  href={url}
                  onClick={(e) => e.stopPropagation()}
                  className="block p-1.5 rounded-full duration-200 hover:text-accent hover:bg-accent/10"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon icon="ci:external-link" width={24} height={24} />
                </a>
              )}
            </div>
          </div>
          <h4 className="flex justify-between items-center font-medium text-lg capitalize duration-200 group-hover:text-accent">
            <span>{name}</span>
            <span className="mr-1 text-sm font-mono text-slate-500">{year}</span>
          </h4>
        </div>
      </button>
    </motion.div>
  ) : (
    <></>
  );
};

export default ProjectCard;
