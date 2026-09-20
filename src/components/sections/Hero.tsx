import React, { useEffect, useState } from 'react';
import { CommentEyebrow, CodeButton, StaggeredWordHeading, WindowCard } from '../theme';
import { projects as PROJECTS } from '../../data/projects';
import { cv as CV } from '../../data/cv';
import ProjectCard from '../ProjectCard';
import {
  SiReact,
  SiPhp,
  SiLaravel,
  SiLivewire,
  SiInertia,
  SiMysql,
  SiPostgresql,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiJavascript,
} from 'react-icons/si';

const INTRODUCTION_TEXT =
  'I build modern, responsive, scalable web applications with clean code and great user experience. Passionate about Laravel, Livewire, Inertia.js, and React.';

export default function Hero() {
  const [typedIntroduction, setTypedIntroduction] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const heroProjects = PROJECTS.slice(0, 2);

  useEffect(() => {
    let currentIndex = 0;
    const typingTimer = window.setInterval(() => {
      currentIndex += 1;
      setTypedIntroduction(INTRODUCTION_TEXT.slice(0, currentIndex));

      if (currentIndex >= INTRODUCTION_TEXT.length) {
        window.clearInterval(typingTimer);
        setIsTypingComplete(true);
      }
    }, 22);

    return () => window.clearInterval(typingTimer);
  }, []);

  return (
    <div id="home" className="w-full flex flex-col items-center">
      {/* Hero Intro Section */}
      <section className="px-6 py-12 md:py-20 max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Heading and Intro */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <CommentEyebrow>Hello, I'm</CommentEyebrow>

          <h1 className="text-5xl md:text-6xl font-bold text-[var(--text-primary)] leading-tight tracking-tight mb-6">
            Joshua
            <StaggeredWordHeading
              text="Full-stack Developer"
              accentWord="Full-stack"
              shouldReveal={isTypingComplete}
              className="block text-4xl md:text-5xl font-bold mt-2"
            />
          </h1>

         <div className="font-mono text-sm leading-relaxed mb-8 select-none">
  <span className="text-[var(--syntax-keyword)]">const</span>{' '}
  <span className="text-[var(--syntax-key)]">introduction</span>{' '}
  <span className="text-[var(--text-primary)]">=</span>{' '}
  <span className="text-[var(--syntax-string)]">
    "{typedIntroduction}"
    <span
      className="ml-0.5 inline-block h-[13px] w-[7px] bg-current align-[-1px]"
      style={{ animation: 'cursor-blink 1s step-end infinite' }}
    />
  </span>
  <span className="text-[var(--text-secondary)]">;</span>
</div>

          <div className="flex flex-wrap gap-4">
            <CodeButton variant="primary" href={CV.file} target="_blank" rel="noreferrer">
              open resume.pdf
            </CodeButton>
            <CodeButton variant="secondary" href="#contact">contact --hire</CodeButton>
          </div>
        </div>

        {/* Right Column: Code Editor Window Card */}
        <div className="lg:col-span-5 w-full">
          <WindowCard label="developer.ts">
            <div className="leading-relaxed select-none text-[13px] md:text-sm">
              {/* Line 1: const developer = { */}
              <div>
                <span className="text-[var(--syntax-keyword)]">const</span>{' '}
                <span className="text-[var(--syntax-key)]">developer</span>{' '}
                <span className="text-[var(--text-primary)]">=</span>{' '}
                <span className="text-yellow-500 font-bold">{'{'}</span>
              </div>

              {/* Line 2: name: "Joshua Cabuang", */}
              <div className="pl-4">
                <span className="text-[var(--syntax-key)]">name</span>
                <span className="text-[var(--text-secondary)]">: </span>
                <span className="text-[var(--syntax-string)]">"Joshua Cabuang"</span>
                <span className="text-[var(--text-secondary)]">,</span>
              </div>

              {/* Line 3: role: "Full-Stack Developer", */}
              <div className="pl-4">
                <span className="text-[var(--syntax-key)]">role</span>
                <span className="text-[var(--text-secondary)]">: </span>
                <span className="text-[var(--syntax-string)]">"Full-Stack Developer"</span>
                <span className="text-[var(--text-secondary)]">,</span>
              </div>

              {/* Line 4: skills: ["Laravel", "Livewire", "React", "Inertia.js", "MySQL", "PostgreSQL"], */}
              <div className="pl-4">
                <span className="text-[var(--syntax-key)]">skills</span>
                <span className="text-[var(--text-secondary)]">: </span>
                <span className="text-yellow-500 font-bold">[</span>
                <span className="text-[var(--syntax-string)]">"Laravel"</span>
                <span className="text-[var(--text-secondary)]">, </span>
                <span className="text-[var(--syntax-string)]">"Livewire"</span>
                <span className="text-[var(--text-secondary)]">, </span>
                <span className="text-[var(--syntax-string)]">"React"</span>
                <span className="text-[var(--text-secondary)]">, </span>
                <span className="text-[var(--syntax-string)]">"Inertia.js"</span>
                <span className="text-[var(--text-secondary)]">, </span>
                <span className="text-[var(--syntax-string)]">"MySQL"</span>
                <span className="text-[var(--text-secondary)]">, </span>
                <span className="text-[var(--syntax-string)]">"PostgreSQL"</span>
                <span className="text-yellow-500 font-bold">]</span>
                <span className="text-[var(--text-secondary)]">,</span>
              </div>

              {/* Line 5: passion: "Building useful things for the web", */}
              <div className="pl-4">
                <span className="text-[var(--syntax-key)]">passion</span>
                <span className="text-[var(--text-secondary)]">: </span>
                <span className="text-[var(--syntax-string)]">"Building useful things for the web"</span>
                <span className="text-[var(--text-secondary)]">,</span>
              </div>

              {/* Line 6: code: "Clean, Simple, Efficient", */}
              <div className="pl-4">
                <span className="text-[var(--syntax-key)]">code</span>
                <span className="text-[var(--text-secondary)]">: </span>
                <span className="text-[var(--syntax-string)]">"Clean, Simple, Efficient"</span>
                <span className="text-[var(--text-secondary)]">,</span>
              </div>

              {/* Line 7: favoriteBug: "The one I finally solved.", */}
              <div className="pl-4">
                <span className="text-[var(--syntax-key)]">favoriteBug</span>
                <span className="text-[var(--text-secondary)]">: </span>
                <span className="text-[var(--syntax-string)]">"The one I finally solved."</span>
                <span className="text-[var(--text-secondary)]">,</span>
              </div>

              {/* Line 8: }; */}
              <div>
                <span className="text-yellow-500 font-bold">{'}'}</span>
                <span className="text-[var(--text-secondary)]">;</span>
              </div>

              <div className="h-4" />

              {/* Line 9: developer.sayHi = () => "Thanks for visiting my portfolio!"; */}
              <div>
                <span className="text-[var(--syntax-key)]">developer</span>
                <span className="text-[var(--text-secondary)]">.</span>
                <span className="text-yellow-500 font-bold">sayHi</span>{' '}
                <span className="text-[var(--text-primary)]">=</span>{' '}
                <span className="text-[var(--text-primary)]">()</span>{' '}
                <span className="text-[var(--syntax-key)]">=&gt;</span>{' '}
                <span className="text-[var(--syntax-string)]">"Thanks for visiting my portfolio!"</span>
                <span className="text-[var(--text-secondary)]">;</span>
              </div>

              <div className="h-4" />

              {/* Line 10: export default developer; */}
              <div>
                <span className="text-[var(--syntax-keyword)]">export</span>{' '}
                <span className="text-[var(--syntax-keyword)]">default</span>{' '}
                <span className="text-[var(--text-primary)]">developer</span>
                <span className="text-[var(--text-secondary)]">;</span>
              </div>
            </div>
          </WindowCard>
        </div>
      </section>

      {/* Stack & Projects Section */}
      <section id="stack" className="px-6 py-16 max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 border-t border-[var(--border-subtle)]">
        {/* Left Column: My Stack */}
        <div className="lg:col-span-5 flex flex-col">
          <CommentEyebrow>My stack</CommentEyebrow>

          {/* Orbiting Container */}
          <div className="relative w-full h-[400px] flex items-center justify-center select-none pointer-events-none mt-8 overflow-hidden lg:overflow-visible">
            {/* Concentric Orbit Rings */}
            {/* Inner Ring (90px radius / 180px diameter) */}
            <div className="absolute w-[180px] h-[180px] rounded-full border border-[var(--border-subtle)] opacity-25" />
            {/* Middle Ring (125px radius / 250px diameter) */}
            <div className="absolute w-[250px] h-[250px] rounded-full border border-[var(--border-subtle)] opacity-25" />
            {/* Outer Ring (160px radius / 320px diameter) */}
            <div className="absolute w-[320px] h-[320px] rounded-full border border-[var(--border-subtle)] opacity-25" />

            {/* Central Stack Hub (HTML, CSS, JS Shields overlapping) */}
            <div className="absolute z-20 w-32 h-32 flex items-center justify-center">
              {/* CSS3 Icon */}
              <div className="absolute transform -translate-x-6 translate-y-5">
                <SiCss className="text-[#1572b6] text-5xl" />
              </div>
              {/* HTML5 Icon */}
              <div className="absolute transform translate-x-6 translate-y-5">
                <SiHtml5 className="text-[#e34f26] text-5xl" />
              </div>
              {/* JS Icon */}
              <div className="absolute transform -translate-y-6">
                <SiJavascript className="text-[#f7df1e] text-6xl rounded" />
              </div>
            </div>

            {/* Orbiting Icons */}
            {/* React (12 o'clock / 270deg, outer ring) */}
            <div
              className="orbiting-item z-30 flex items-center justify-center p-2 rounded-lg bg-[var(--bg-page)] border border-[var(--border-subtle)] shadow-md pointer-events-auto hover:border-[var(--accent-blue)] transition-colors"
              style={{ '--angle': '270deg', '--radius': '160px', '--duration': '28s' } as React.CSSProperties}
            >
              <SiReact className="text-[#61dafb] text-4xl" />
            </div>

            {/* Livewire (2 o'clock / 330deg, middle ring) */}
            <div
              className="orbiting-item z-30 flex flex-col items-center justify-center p-2 rounded-lg bg-[var(--bg-page)] border border-[var(--border-subtle)] shadow-md pointer-events-auto hover:border-[var(--accent-blue)] transition-colors"
              style={{ '--angle': '330deg', '--radius': '125px', '--duration': '24s' } as React.CSSProperties}
            >
              <div className="flex items-center gap-1">
                <SiLivewire className="text-[#fb70a9] text-xl" />
                <span className="text-[10px] font-mono font-bold text-[#fb70a9]">livewire</span>
              </div>
            </div>

            {/* Inertia.js (3 o'clock / 0deg, outer ring) */}
            <div
              className="orbiting-item z-30 flex flex-col items-center justify-center p-2 rounded-lg bg-[var(--bg-page)] border border-[var(--border-subtle)] shadow-md pointer-events-auto hover:border-[var(--accent-blue)] transition-colors"
              style={{ '--angle': '0deg', '--radius': '160px', '--duration': '28s' } as React.CSSProperties}
            >
              <div className="flex items-center gap-1">
                <SiInertia className="text-[#9553e9] text-xl" />
                <span className="text-[10px] font-mono font-bold text-[#9553e9]">inertia</span>
              </div>
            </div>

            {/* MySQL (4 o'clock / 30deg, middle ring) */}
            <div
              className="orbiting-item z-30 flex flex-col items-center justify-center px-3 py-1.5 rounded-lg bg-[var(--bg-page)] border border-[var(--border-subtle)] shadow-md pointer-events-auto hover:border-[var(--accent-blue)] transition-colors"
              style={{ '--angle': '30deg', '--radius': '125px', '--duration': '24s' } as React.CSSProperties}
            >
              <div className="flex items-center gap-1 text-[#00758f]">
                <SiMysql className="text-3xl" />
              </div>
            </div>

            {/* Tailwind CSS (6 o'clock / 90deg, outer ring) */}
            <div
              className="orbiting-item z-30 flex items-center justify-center p-2.5 rounded-lg bg-[var(--bg-page)] border border-[var(--border-subtle)] shadow-md pointer-events-auto hover:border-[var(--accent-blue)] transition-colors"
              style={{ '--angle': '90deg', '--radius': '160px', '--duration': '28s' } as React.CSSProperties}
            >
              <SiTailwindcss className="text-[#06b6d4] text-3xl" />
            </div>

            {/* PostgreSQL (7 o'clock / 120deg, middle ring) */}
            <div
              className="orbiting-item z-30 flex items-center justify-center p-2.5 rounded-lg bg-[var(--bg-page)] border border-[var(--border-subtle)] shadow-md pointer-events-auto hover:border-[var(--accent-blue)] transition-colors"
              style={{ '--angle': '120deg', '--radius': '125px', '--duration': '24s' } as React.CSSProperties}
            >
              <SiPostgresql className="text-[#4169e1] text-3xl" />
            </div>

            {/* PHP (8 o'clock / 150deg, outer ring) */}
            <div
              className="orbiting-item z-30 flex items-center justify-center p-2 rounded-lg bg-[var(--bg-page)] border border-[var(--border-subtle)] shadow-md pointer-events-auto hover:border-[var(--accent-blue)] transition-colors"
              style={{ '--angle': '150deg', '--radius': '160px', '--duration': '28s' } as React.CSSProperties}
            >
              <SiPhp className="text-[#777bb4] text-4xl" />
            </div>

            {/* Laravel (10 o'clock / 210deg, middle ring) */}
            <div
              className="orbiting-item z-30 flex items-center justify-center p-2.5 rounded-lg bg-[var(--bg-page)] border border-[var(--border-subtle)] shadow-md pointer-events-auto hover:border-[var(--accent-blue)] transition-colors"
              style={{ '--angle': '210deg', '--radius': '125px', '--duration': '24s' } as React.CSSProperties}
            >
              <SiLaravel className="text-[#ff2d20] text-3xl" />
            </div>

            {/* Orbiting star dots */}
            <div
              className="orbiting-item w-1 h-1 bg-white rounded-full opacity-35"
              style={{ '--angle': '0deg', '--radius': '90px', '--duration': '20s' } as React.CSSProperties}
            />
            <div
              className="orbiting-item w-1.5 h-1.5 bg-white rounded-full opacity-30"
              style={{ '--angle': '60deg', '--radius': '125px', '--duration': '24s' } as React.CSSProperties}
            />
            <div
              className="orbiting-item w-1 h-1 bg-white rounded-full opacity-40"
              style={{ '--angle': '120deg', '--radius': '160px', '--duration': '28s' } as React.CSSProperties}
            />
            <div
              className="orbiting-item w-1.5 h-1.5 bg-white rounded-full opacity-25"
              style={{ '--angle': '180deg', '--radius': '90px', '--duration': '20s' } as React.CSSProperties}
            />
            <div
              className="orbiting-item w-1 h-1 bg-white rounded-full opacity-35"
              style={{ '--angle': '240deg', '--radius': '125px', '--duration': '24s' } as React.CSSProperties}
            />
            <div
              className="orbiting-item w-1.5 h-1.5 bg-white rounded-full opacity-30"
              style={{ '--angle': '300deg', '--radius': '160px', '--duration': '28s' } as React.CSSProperties}
            />
          </div>
        </div>

        {/* Right Column: My Projects */}
        <div className="lg:col-span-7 flex flex-col">
          {/* Header Row */}
          <div className="flex items-center justify-between mb-8">
            <CommentEyebrow>My projects</CommentEyebrow>
            <a
              href="#projects"
              className="font-mono text-xs text-[var(--accent-blue)] hover:text-[var(--accent-blue-hover)] hover:underline flex items-center gap-1 transition-colors"
            >
              &gt;_ls projects
            </a>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
            {heroProjects.map((project, index) => (
              <ProjectCard key={`${project.title}-${index}`} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}