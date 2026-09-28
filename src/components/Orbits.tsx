import React from 'react';
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

type OrbitStyle = React.CSSProperties & {
  '--angle'?: string;
  '--radius'?: string;
  '--duration'?: string;
};

export default function Orbits() {
  return (
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
        style={{ '--angle': '270deg', '--radius': '160px', '--duration': '28s' } as OrbitStyle}
      >
        <SiReact className="text-[#61dafb] text-4xl" />
      </div>

      {/* Livewire (2 o'clock / 330deg, middle ring) */}
      <div
        className="orbiting-item z-30 flex flex-col items-center justify-center p-2 rounded-lg bg-[var(--bg-page)] border border-[var(--border-subtle)] shadow-md pointer-events-auto hover:border-[var(--accent-blue)] transition-colors"
        style={{ '--angle': '330deg', '--radius': '125px', '--duration': '24s' } as OrbitStyle}
      >
        <div className="flex items-center gap-1">
          <SiLivewire className="text-[#fb70a9] text-xl" />
          <span className="text-[10px] font-mono font-bold text-[#fb70a9]">livewire</span>
        </div>
      </div>

      {/* Inertia.js (3 o'clock / 0deg, outer ring) */}
      <div
        className="orbiting-item z-30 flex flex-col items-center justify-center p-2 rounded-lg bg-[var(--bg-page)] border border-[var(--border-subtle)] shadow-md pointer-events-auto hover:border-[var(--accent-blue)] transition-colors"
        style={{ '--angle': '0deg', '--radius': '160px', '--duration': '28s' } as OrbitStyle}
      >
        <div className="flex items-center gap-1">
          <SiInertia className="text-[#9553e9] text-xl" />
          <span className="text-[10px] font-mono font-bold text-[#9553e9]">inertia</span>
        </div>
      </div>

      {/* MySQL (4 o'clock / 30deg, middle ring) */}
      <div
        className="orbiting-item z-30 flex flex-col items-center justify-center px-3 py-1.5 rounded-lg bg-[var(--bg-page)] border border-[var(--border-subtle)] shadow-md pointer-events-auto hover:border-[var(--accent-blue)] transition-colors"
        style={{ '--angle': '30deg', '--radius': '125px', '--duration': '24s' } as OrbitStyle}
      >
        <div className="flex items-center gap-1 text-[#00758f]">
          <SiMysql className="text-3xl" />
        </div>
      </div>

      {/* Tailwind CSS (6 o'clock / 90deg, outer ring) */}
      <div
        className="orbiting-item z-30 flex items-center justify-center p-2.5 rounded-lg bg-[var(--bg-page)] border border-[var(--border-subtle)] shadow-md pointer-events-auto hover:border-[var(--accent-blue)] transition-colors"
        style={{ '--angle': '90deg', '--radius': '160px', '--duration': '28s' } as OrbitStyle}
      >
        <SiTailwindcss className="text-[#06b6d4] text-3xl" />
      </div>

      {/* PostgreSQL (7 o'clock / 120deg, middle ring) */}
      <div
        className="orbiting-item z-30 flex items-center justify-center p-2.5 rounded-lg bg-[var(--bg-page)] border border-[var(--border-subtle)] shadow-md pointer-events-auto hover:border-[var(--accent-blue)] transition-colors"
        style={{ '--angle': '120deg', '--radius': '125px', '--duration': '24s' } as OrbitStyle}
      >
        <SiPostgresql className="text-[#4169e1] text-3xl" />
      </div>

      {/* PHP (8 o'clock / 150deg, outer ring) */}
      <div
        className="orbiting-item z-30 flex items-center justify-center p-2 rounded-lg bg-[var(--bg-page)] border border-[var(--border-subtle)] shadow-md pointer-events-auto hover:border-[var(--accent-blue)] transition-colors"
        style={{ '--angle': '150deg', '--radius': '160px', '--duration': '28s' } as OrbitStyle}
      >
        <SiPhp className="text-[#777bb4] text-4xl" />
      </div>

      {/* Laravel (10 o'clock / 210deg, middle ring) */}
      <div
        className="orbiting-item z-30 flex items-center justify-center p-2.5 rounded-lg bg-[var(--bg-page)] border border-[var(--border-subtle)] shadow-md pointer-events-auto hover:border-[var(--accent-blue)] transition-colors"
        style={{ '--angle': '210deg', '--radius': '125px', '--duration': '24s' } as OrbitStyle}
      >
        <SiLaravel className="text-[#ff2d20] text-3xl" />
      </div>

      {/* Orbiting star dots */}
      <div
        className="orbiting-item w-1 h-1 bg-white rounded-full opacity-35"
        style={{ '--angle': '0deg', '--radius': '90px', '--duration': '20s' } as OrbitStyle}
      />
      <div
        className="orbiting-item w-1.5 h-1.5 bg-white rounded-full opacity-30"
        style={{ '--angle': '60deg', '--radius': '125px', '--duration': '24s' } as OrbitStyle}
      />
      <div
        className="orbiting-item w-1 h-1 bg-white rounded-full opacity-40"
        style={{ '--angle': '120deg', '--radius': '160px', '--duration': '28s' } as OrbitStyle}
      />
      <div
        className="orbiting-item w-1.5 h-1.5 bg-white rounded-full opacity-25"
        style={{ '--angle': '180deg', '--radius': '90px', '--duration': '20s' } as OrbitStyle}
      />
      <div
        className="orbiting-item w-1 h-1 bg-white rounded-full opacity-35"
        style={{ '--angle': '240deg', '--radius': '125px', '--duration': '24s' } as OrbitStyle}
      />
      <div
        className="orbiting-item w-1.5 h-1.5 bg-white rounded-full opacity-30"
        style={{ '--angle': '300deg', '--radius': '160px', '--duration': '28s' } as OrbitStyle}
      />
    </div>
  );
}
