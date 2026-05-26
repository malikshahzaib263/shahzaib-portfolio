import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-6 py-20">
      <h2 className="text-4xl font-bold">Experience</h2>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {experience.map((exp) => (
          <div
            key={exp.role}
            className="rounded-3xl border border-white/10 bg-white/10 p-6"
          >
            <h3 className="text-2xl font-bold">{exp.role}</h3>
            <p className="mt-2 text-cyan-400">{exp.company}</p>
            <p className="mt-1 text-sm text-gray-400">{exp.date}</p>
            <p className="mt-4 text-gray-300">{exp.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}