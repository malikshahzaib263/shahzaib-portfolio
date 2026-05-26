import { Github } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#050816]/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold">
          Shahzaib<span className="text-cyan-400">.</span>
        </h1>

        <div className="hidden gap-6 text-sm text-gray-300 md:flex">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>

        <a
          href="https://github.com/malikshahzaib263"
          target="_blank"
          className="flex items-center gap-2 rounded-xl bg-cyan-400 px-4 py-2 text-black"
        >
          <Github size={18} /> GitHub
        </a>
      </div>
    </nav>
  );
}