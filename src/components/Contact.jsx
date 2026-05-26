import { Mail, Phone, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
      <div className="rounded-3xl border border-white/10 bg-white/10 p-8">
        <h2 className="text-4xl font-bold">Contact Me</h2>
        <p className="mt-4 text-gray-300">
          Open to internships, freelance projects, junior developer roles and
          AI/ML or mobile app development work.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <a href="mailto:shahzaibarshad2610@gmail.com" className="flex gap-3 rounded-xl bg-black/30 p-4">
            <Mail className="text-cyan-400" /> shahzaibarshad2610@gmail.com
          </a>

          <a href="tel:03035395866" className="flex gap-3 rounded-xl bg-black/30 p-4">
            <Phone className="text-cyan-400" /> 0303-5395866
          </a>

          <a
            href="https://www.linkedin.com/in/shahzaib-arshad-5b6479317"
            target="_blank"
            className="flex gap-3 rounded-xl bg-black/30 p-4"
          >
            <Linkedin className="text-cyan-400" /> LinkedIn
          </a>

          <a
            href="https://github.com/malikshahzaib263"
            target="_blank"
            className="flex gap-3 rounded-xl bg-black/30 p-4"
          >
            <Github className="text-cyan-400" /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
}