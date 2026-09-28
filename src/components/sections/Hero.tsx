import { useEffect, useState } from "react";
import {
  CommentEyebrow,
  CodeButton,
  StaggeredWordHeading,
  WindowCard,
} from "../theme";
import { projects as PROJECTS } from "../../data/projects";
import { cv as CV } from "../../data/cv";
import ProjectCard from "../ProjectCard";
import Orbits from "../Orbits";

const INTRODUCTION_TEXT =
  "I build modern, responsive, scalable web applications with clean code and great user experience. Passionate about Laravel, Livewire, Inertia.js, and React.";

export default function Hero() {
  const [typedIntroduction, setTypedIntroduction] = useState("");
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
            <span className="text-[var(--syntax-keyword)]">const</span>{" "}
            <span className="text-[var(--syntax-key)]">introduction</span>{" "}
            <span className="text-[var(--text-primary)]">=</span>{" "}
            <span className="text-[var(--syntax-string)]">
              "{typedIntroduction}"
              <span
                className="ml-0.5 inline-block h-[13px] w-[7px] bg-current align-[-1px]"
                style={{ animation: "cursor-blink 1s step-end infinite" }}
              />
            </span>
            <span className="text-[var(--text-secondary)]">;</span>
          </div>

          <div className="flex flex-wrap gap-4">
            <CodeButton
              variant="primary"
              href={CV.file}
              target="_blank"
              rel="noreferrer"
            >
              open resume.pdf
            </CodeButton>
            <CodeButton variant="secondary" href="#contact">
              contact --hire
            </CodeButton>
          </div>
        </div>

        {/* Right Column: Code Editor Window Card */}
        <div className="lg:col-span-5 w-full">
          <WindowCard label="developer.ts">
            <div className="leading-relaxed select-none text-[13px] md:text-sm">
              {/* Line 1: const developer = { */}
              <div>
                <span className="text-[var(--syntax-keyword)]">const</span>{" "}
                <span className="text-[var(--syntax-key)]">developer</span>{" "}
                <span className="text-[var(--text-primary)]">=</span>{" "}
                <span className="text-yellow-500 font-bold">{"{"}</span>
              </div>

              {/* Line 2: name: "Joshua Cabuang", */}
              <div className="pl-4">
                <span className="text-[var(--syntax-key)]">name</span>
                <span className="text-[var(--text-secondary)]">: </span>
                <span className="text-[var(--syntax-string)]">
                  "Joshua Cabuang"
                </span>
                <span className="text-[var(--text-secondary)]">,</span>
              </div>

              {/* Line 3: role: "Full-Stack Developer", */}
              <div className="pl-4">
                <span className="text-[var(--syntax-key)]">role</span>
                <span className="text-[var(--text-secondary)]">: </span>
                <span className="text-[var(--syntax-string)]">
                  "Full-Stack Developer"
                </span>
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
                <span className="text-[var(--syntax-string)]">
                  "Inertia.js"
                </span>
                <span className="text-[var(--text-secondary)]">, </span>
                <span className="text-[var(--syntax-string)]">"MySQL"</span>
                <span className="text-[var(--text-secondary)]">, </span>
                <span className="text-[var(--syntax-string)]">
                  "PostgreSQL"
                </span>
                <span className="text-yellow-500 font-bold">]</span>
                <span className="text-[var(--text-secondary)]">,</span>
              </div>

              {/* Line 5: passion: "Building useful things for the web", */}
              <div className="pl-4">
                <span className="text-[var(--syntax-key)]">passion</span>
                <span className="text-[var(--text-secondary)]">: </span>
                <span className="text-[var(--syntax-string)]">
                  "Building useful things for the web"
                </span>
                <span className="text-[var(--text-secondary)]">,</span>
              </div>

              {/* Line 6: code: "Clean, Simple, Efficient", */}
              <div className="pl-4">
                <span className="text-[var(--syntax-key)]">code</span>
                <span className="text-[var(--text-secondary)]">: </span>
                <span className="text-[var(--syntax-string)]">
                  "Clean, Simple, Efficient"
                </span>
                <span className="text-[var(--text-secondary)]">,</span>
              </div>

              {/* Line 7: favoriteBug: "The one I finally solved.", */}
              <div className="pl-4">
                <span className="text-[var(--syntax-key)]">favoriteBug</span>
                <span className="text-[var(--text-secondary)]">: </span>
                <span className="text-[var(--syntax-string)]">
                  "The one I finally solved."
                </span>
                <span className="text-[var(--text-secondary)]">,</span>
              </div>

              {/* Line 8: }; */}
              <div>
                <span className="text-yellow-500 font-bold">{"}"}</span>
                <span className="text-[var(--text-secondary)]">;</span>
              </div>

              <div className="h-4" />

              {/* Line 9: developer.sayHi = () => "Thanks for visiting my portfolio!"; */}
              <div>
                <span className="text-[var(--syntax-key)]">developer</span>
                <span className="text-[var(--text-secondary)]">.</span>
                <span className="text-yellow-500 font-bold">sayHi</span>{" "}
                <span className="text-[var(--text-primary)]">=</span>{" "}
                <span className="text-[var(--text-primary)]">()</span>{" "}
                <span className="text-[var(--syntax-key)]">=&gt;</span>{" "}
                <span className="text-[var(--syntax-string)]">
                  "Thanks for visiting my portfolio!"
                </span>
                <span className="text-[var(--text-secondary)]">;</span>
              </div>

              <div className="h-4" />

              {/* Line 10: export default developer; */}
              <div>
                <span className="text-[var(--syntax-keyword)]">export</span>{" "}
                <span className="text-[var(--syntax-keyword)]">default</span>{" "}
                <span className="text-[var(--text-primary)]">developer</span>
                <span className="text-[var(--text-secondary)]">;</span>
              </div>
            </div>
          </WindowCard>
        </div>
      </section>

      {/* Stack & Projects Section */}
      <section
        id="stack"
        className="px-6 py-16 max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 border-t border-[var(--border-subtle)]"
      >
        {/* Left Column: My Stack */}
        <div className="lg:col-span-5 flex flex-col">
          <CommentEyebrow>My stack</CommentEyebrow>

          <Orbits />
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
              <ProjectCard
                key={`${project.title}-${index}`}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
