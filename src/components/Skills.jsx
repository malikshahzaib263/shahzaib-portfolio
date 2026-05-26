import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-6 py-20">
      <h2 className="text-4xl font-bold">Skills</h2>

      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
        {skills.map((skill) => (
          <div
            key={skill}
            className="rounded-2xl border border-white/10 bg-white/10 p-4 text-center text-gray-200"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}