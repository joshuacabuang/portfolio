import './App.css'
import { Nav } from './components/nav'
import { Hero, About, Projects, Certifications, Contact } from './components/sections'
import { ChatWidget } from './components/chat'
import { Analytics } from '@vercel/analytics/react';
function App() {
  return (
    <div className="min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)] flex flex-col items-center">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Certifications />
      <Contact />
      <ChatWidget />

      <Analytics />
    </div>
  );
}

export default App
