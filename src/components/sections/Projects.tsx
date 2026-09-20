import { useState } from 'react';
import { CommentEyebrow, SectionHeading, CodeButton } from '../theme';
import { projects } from '../../data/projects';
import ProjectCard from '../ProjectCard';

export default function Projects() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const hasHiddenProjects = projects.length > 2;
  const visibleProjects = showAllProjects ? projects : projects.slice(0, 2);

  return (
    <section
      id="projects"
      className="px-6 py-16 max-w-6xl w-full mx-auto border-t border-[var(--border-subtle)]"
    >
      <div className="mb-10">
        <CommentEyebrow>Hello, I&apos;m</CommentEyebrow>
        <SectionHeading>Projects</SectionHeading>
        <p className="mt-4 max-w-xl text-sm text-[var(--text-secondary)] leading-relaxed font-sans">
          A collection of projects I&apos;ve built to learn new technologies and grow as a developer.
        </p>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
        {visibleProjects.map((project, index) => (
          <ProjectCard key={`${project.title}-${index}`} project={project} index={index} />
        ))}
      </div>

      {hasHiddenProjects && !showAllProjects && (
        <div className="mt-8 flex justify-center">
          <CodeButton variant="secondary" onClick={() => setShowAllProjects(true)}>
            view all projects
          </CodeButton>
        </div>
      )}
    </section>
  );
}