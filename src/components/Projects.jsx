import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-20">
      <h2 className="text-4xl font-bold">Projects</h2>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-3xl border border-white/10 bg-white/10 p-6 transition hover:-translate-y-2"
          >
            <p className="text-cyan-400">{project.type}</p>
            <h3 className="mt-2 text-2xl font-bold">{project.title}</h3>
            <p className="mt-4 text-gray-300">{project.desc}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}