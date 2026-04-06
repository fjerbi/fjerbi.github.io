'use client';
import { PROJECTS_INITIALLY } from '@/lib/utils/config';
import { sortByYear } from '@/lib/utils/helper';
import { projectsSection } from '@/lib/utils/portfolio';

import { Button, ProjectCard, ProjectModal, Wrapper } from '@/components';

import { getSectionAnimation, projectVariants } from '@/styles/animations';

import { motion } from 'framer-motion';
import { useState } from 'react';

const Projects = () => {
  const { projects, title } = projectsSection;
  const [showMore, setShowMore] = useState(false);
  const [selectedProject, setSelectedProject] = useState < typeof projects[0] | null > (null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const topProjects = projects.slice(0, PROJECTS_INITIALLY);
  const visibleProjects = showMore ? projects : topProjects;

  const handleOpenModal = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <Wrapper id="projects" animate={false} {...getSectionAnimation}>
      <motion.h2 className="heading-secondary text-center !mb-12">
        {title}
      </motion.h2>
      <div className="grid gap-10 grid-cols-1 lg:grid-cols-2 place-items-center">
        {sortByYear(visibleProjects).map((project, i) => {
          if (i < PROJECTS_INITIALLY) {
            return (
              <ProjectCard
                {...project}
                key={project.id}
                variants={projectVariants}
                initial="hidden"
                whileInView="show"
                custom={i}
                viewport={{ once: true }}
                onClick={() => handleOpenModal(project)}
              />
            );
          }

          return (
            <ProjectCard
              {...project}
              key={project.id}
              variants={projectVariants}
              initial="hidden"
              animate="show"
              custom={i - PROJECTS_INITIALLY}
              onClick={() => handleOpenModal(project)}
            />
          );
        })}
      </div>
      {projects.length > PROJECTS_INITIALLY && (
        <Button
          size="lg"
          className="!mt-20"
          center
          onClick={() => setShowMore((prev) => !prev)}
        >
          {showMore ? 'show less' : 'show more'}
        </Button>
      )}

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </Wrapper>
  );
};

export default Projects;
