import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center px-6 pt-24" id="home">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="mb-4 text-cyan-400">
            Software Engineer • AI/ML Enthusiast • Flutter Developer
          </p>

          <h1 className="text-5xl font-bold leading-tight">
            Hi, I’m{" "}
            <span className="text-cyan-400">Shahzaib Arshad</span>
          </h1>

          <p className="mt-6 text-lg text-gray-300">
            I build intelligent, user-friendly applications using Python,
            Flutter, Firebase, FastAPI and Machine Learning.
          </p>

          <div className="mt-8 flex gap-4">
            <a href="#projects" className="rounded-xl bg-cyan-400 px-6 py-3 text-black">
              View Projects
            </a>
            <a href="#contact" className="rounded-xl border border-white/20 px-6 py-3">
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="rounded-3xl border border-white/10 bg-white/10 p-8 shadow-2xl"
        >
          <div className="flex h-28 w-28 items-center justify-center rounded-3xl bg-cyan-400 text-4xl font-bold text-black">
            SA
          </div>

          <h2 className="mt-6 text-2xl font-bold">AI-Powered Developer</h2>
          <p className="mt-3 text-gray-300">
            Mobile apps, backend APIs, Firebase systems and ML-powered products.
          </p>
        </motion.div>
      </div>
    </section>
  );
}