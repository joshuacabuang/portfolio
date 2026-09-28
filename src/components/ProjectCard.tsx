import React from 'react';
import { WindowCard, CodeButton } from './theme';
import type { Project } from '../types/project';

function getProjectBadge(title: string) {
  const firstWord = title.trim().split(/\s+/)[0] ?? '';
  const cleaned = firstWord.replace(/[^A-Za-z0-9]/g, '');
  if (cleaned.length >= 2 && cleaned.length <= 6 && cleaned === cleaned.toUpperCase()) {
    return cleaned;
  }
  return title
    .split(/\s+/)
    .map((word) => word[0])
    .filter(Boolean)
    .join('')
    .slice(0, 4)
    .toUpperCase();
}

type ProjectCardProps = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <WindowCard label={`project-${index + 1}.json`}>
      <div className="rounded-md border border-[var(--border-subtle)] bg-[var(--bg-card-inset)] overflow-hidden">
        <div className="border-b border-[var(--border-subtle)] p-4 flex items-center justify-between gap-3">
          {project.projectLogo ? (
            <div className="h-8 min-w-14 px-2 bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-lg flex items-center justify-center">
              <img
                src={project.projectLogo}
                alt={`${project.title} logo`}
                className="h-5 w-auto object-contain"
              />
            </div>
          ) : (
            <div className="font-mono text-[10px] px-2 py-1 rounded-md border border-[var(--border-subtle)] text-[var(--accent-blue)]">
              {getProjectBadge(project.title)}
            </div>
          )}
          <div className="font-mono text-[10px] text-[var(--text-secondary)] flex items-center gap-2">
            <span className="px-2 py-1 rounded-md border border-[var(--border-subtle)]">
              stack: {project.technologies.length}
            </span>
            {project.url && (
              <span className="px-2 py-1 rounded-md border border-emerald-500/40 text-emerald-400 bg-emerald-500/10">
                live
              </span>
            )}
            <span className="px-2 py-1 rounded-md border border-[var(--border-subtle)]">repo</span>
          </div>
        </div>
        <div className="p-4 font-mono text-xs leading-relaxed select-none">
          <div>
            <span className="text-[var(--syntax-keyword)]">const</span>{' '}
            <span className="text-[var(--syntax-key)]">project</span>{' '}
            <span className="text-[var(--text-primary)]">=</span>{' '}
            <span className="text-yellow-500 font-bold">{'{'}</span>
          </div>
          <div className="pl-4">
            <span className="text-[var(--syntax-key)]">name</span>
            <span className="text-[var(--text-secondary)]">: </span>
            <span className="text-[var(--syntax-string)]">&quot;{project.title}&quot;</span>
            <span className="text-[var(--text-secondary)]">,</span>
          </div>
          <div className="pl-4">
            <span className="text-[var(--syntax-key)]">stack</span>
            <span className="text-[var(--text-secondary)]">: </span>
            <span className="text-yellow-500 font-bold">[</span>
            {project.technologies.map((tech, techIndex) => (
              <React.Fragment key={`${project.title}-${tech}-${techIndex}`}>
                <span className="text-[var(--syntax-string)]">&quot;{tech}&quot;</span>
                {techIndex < project.technologies.length - 1 && (
                  <span className="text-[var(--text-secondary)]">, </span>
                )}
              </React.Fragment>
            ))}
            <span className="text-yellow-500 font-bold">]</span>
            <span className="text-[var(--text-secondary)]">,</span>
          </div>
          <div className="pl-4">
            <span className="text-[var(--syntax-key)]">path</span>
            <span className="text-[var(--text-secondary)]">: </span>
            <span className="text-[var(--syntax-string)]">&quot;</span>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="text-[var(--syntax-link)] hover:underline break-all"
            >
              {project.github}
            </a>
            <span className="text-[var(--syntax-string)]">&quot;</span>
            {project.url ? <span className="text-[var(--text-secondary)]">,</span> : null}
          </div>
          {project.url && (
            <div className="pl-4">
              <span className="text-[var(--syntax-key)]">url</span>
              <span className="text-[var(--text-secondary)]">: </span>
              <span className="text-[var(--syntax-string)]">&quot;</span>
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="text-[var(--syntax-link)] hover:underline break-all"
              >
                {project.url}
              </a>
              <span className="text-[var(--syntax-string)]">&quot;</span>
            </div>
          )}
          <div>
            <span className="text-yellow-500 font-bold">{'}'}</span>
            <span className="text-[var(--text-secondary)]">;</span>
          </div>
          <div className="mt-2 text-[var(--syntax-keyword)]">
            export default <span className="text-[var(--text-primary)]">project</span>;
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-start gap-3">
        <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{project.description}</p>
      </div>

      <div className="mt-auto w-full pt-6 flex items-center gap-2.5">
        {project.url && (
          <CodeButton
            href={project.url}
            target="_blank"
            rel="noreferrer"
            variant="primary"
            size="sm"
            className="flex-1 whitespace-nowrap"
          >
            live demo
          </CodeButton>
        )}
        <CodeButton
          href={project.github}
          target="_blank"
          rel="noreferrer"
          variant={project.url ? 'secondary' : 'primary'}
          size={project.url ? 'sm' : 'md'}
          className={project.url ? 'flex-1 whitespace-nowrap' : ''}
        >
          {project.url ? 'github' : 'view'}
        </CodeButton>
      </div>
    </WindowCard>
  );
}
