import { useEffect, useState } from "react";
import "./index.css";

const skills = [
  "Python",
  "React.js",
  "Flutter",
  "Firebase",
  "FastAPI",
  "Flask",
  "Django",
  "Machine Learning",
  "NLP",
  "TensorFlow Lite",
  "MongoDB",
  "SQL Server",
  "GitHub",
  "Postman",
  "Android Studio",
  "Google Colab",
];

const projects = [
  {
    title: "Email Automation System",
    desc: "Python automation project for sending and managing emails efficiently using scripting techniques.",
    tech: "Python • Automation • Email Automation",
    link: "https://www.linkedin.com/posts/shahzaib-arshad-5b6479317_python-automation-emailautomation-ugcPost-7459195373639839744-5kQS/",
  },
  {
    title: "Rule-Based Chatbot",
    desc: "Python chatbot designed to handle predefined user queries and automated responses.",
    tech: "Python • Chatbot • Programming",
    link: "https://www.linkedin.com/posts/shahzaib-arshad-5b6479317_python-chatbot-programming-ugcPost-7459195123697078272-GoTu/",
  },
  {
    title: "Stock Portfolio Tracker",
    desc: "Python Flask project for tracking and managing stock portfolio data.",
    tech: "Python • Flask • Automation",
    link: "https://www.linkedin.com/posts/shahzaib-arshad-5b6479317_python-flask-automation-ugcPost-7459194623899369472-LI7c/",
  },
  {
    title: "Taxi Booking System",
    desc: "A Flask-based taxi booking platform with booking management and service handling features.",
    tech: "Python • Flask • Full Stack",
    link: "https://www.linkedin.com/posts/shahzaib-arshad-5b6479317_python-flask-fullstackdevelopment-ugcPost-7403096238914514944-9WMl/",
  },
  {
    title: "Event Log System",
    desc: "Django-based workflow automation system for monitoring and managing event activities.",
    tech: "Django • Workflow Automation",
    link: "https://www.linkedin.com/posts/shahzaib-arshad-5b6479317_django-fullstackdevelopment-workflowautomation-ugcPost-7377701959040045057-5IeD/",
  },
  {
    title: "Vehicle Maintenance System",
    desc: "Fleet management system for vehicle records, maintenance history, and operational tracking.",
    tech: "Internship • Fleet Management • Full Stack",
    link: "https://www.linkedin.com/posts/shahzaib-arshad-5b6479317_internship-fleetmanagement-fullstackdevelopment-ugcPost-7370669662822350849-kpwT/",
  },
  {
    title: "Legal Case Management System",
    desc: "Internship project showcase for managing legal records and case workflow operations.",
    tech: "Internship • Project Showcase",
    link: "https://www.linkedin.com/posts/shahzaib-arshad-5b6479317_title-internship-project-showcase-ugcPost-7369274246604152833-T7zm/",
  },
];

const certifications = [
  {
    title: "Python Developer Internship",
    org: "AITSL – Attock Information Technology Services Ltd.",
    desc: "Professional internship focused on Flask, Django, backend systems, deployment, databases, and full-stack development.",
    link: "https://www.linkedin.com/posts/shahzaib-arshad-5b6479317_completion-of-internship-activity-7461103954471440384-YlUD/",
  },
  {
    title: "HTML Front-End Development",
    org: "Front-End Development Certification",
    desc: "Completed training in HTML front-end development, responsive layouts, and modern web interface fundamentals.",
    link: "https://www.linkedin.com/posts/shahzaib-arshad-5b6479317_completion-certificate-for-html-front-end-activity-7358459088285876224-fkmi/",
  },
  {
    title: "Python Programming",
    org: "Programming Certification",
    desc: "Completed Python programming certification covering scripting, problem-solving, automation, and application development.",
    link: "https://www.linkedin.com/posts/shahzaib-arshad-5b6479317_completion-certificate-for-python-programming-activity-7353166225125892097-H2cT/",
  },
  {
    title: "Internship 2025",
    org: "Professional Internship Program",
    desc: "Participated in software engineering internship program involving project development, collaboration, and implementation.",
    link: "https://www.linkedin.com/posts/shahzaib-arshad-5b6479317_internship-for-the-year-2025-activity-7358463919310434304-rZJx/",
  },
];

export default function App() {
  const [openAssistant, setOpenAssistant] = useState(false);

const speakAssistant = () => {
  const text =
    "Hello. I am Shahzaib's AI assistant. Shahzaib is a Software Engineering student focused on AI, Machine Learning, Python development, Flutter development, FastAPI, Firebase, and intelligent digital products. His Final Year Project is STTP, an AI-powered speech-to-text predictor for stuttering assistance.";

  const speech = new SpeechSynthesisUtterance(text);

  speech.lang = "en-US";
  speech.rate = 1;

  window.speechSynthesis.speak(speech);
};
    useEffect(() => {
    const glow = document.querySelector(".cursorGlow");

    const moveGlow = (e) => {
      if (glow) {
        glow.style.left = `${e.clientX}px`;
        glow.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("mousemove", moveGlow);

    return () => {
      window.removeEventListener("mousemove", moveGlow);
    };
  }, []);
  return (
    <main className="site">
      <div className="cursorGlow"></div>
      <div className="orb orb1"></div>
      <div className="orb orb2"></div>
      <div className="orb orb3"></div>

      <nav className="navbar">
        <h1>
          Shahzaib<span>.</span>
        </h1>

        <div className="navlinks">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#fyp">FYP</a>
          <a href="#projects">Projects</a>
          <a href="#certifications">Certifications</a>
          <a href="#journey">Journey</a>
          <a href="#contact">Contact</a>
        </div>

        <a
          className="navbtn"
          href="https://github.com/malikshahzaib263"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </nav>

      <section className="hero">
        <div className="heroText">
          <p className="eyebrow">AI/ML • Full Stack • Mobile App Developer • Python Developer</p>

          <h2>
            Building smart digital products with
            <span> clean code & real impact.</span>
          </h2>

          <p className="desc">
            I’m Shahzaib Arshad, a Software Engineering student passionate about
            AI-powered apps, backend systems, Flutter mobile development, Python development, and
            user-friendly digital solutions.
          </p>

          <div className="actions">

  <a href="#projects">
    Explore Work
  </a>

  <a
    className="ghost"
    href="/cv.pdf"
    target="_blank"
    rel="noreferrer"
  >
    Download CV
  </a>

  <a
    className="ghost"
    href="#contact"
  >
    Hire / Contact
  </a>

</div>

          <div className="stats">
            <div>
              <b>10+</b>
              <small>Projects</small>
            </div>
            <div>
              <b>2</b>
              <small>Internships</small>
            </div>
            <div>
              <b>AI</b>
              <small>FYP Focus</small>
            </div>
          </div>
        </div>

        <div className="heroCard">
          <div className="badge">Available for Opportunities</div>
        <img
        src="/profile.jpg"
        alt="Shahzaib Arshad"
        className="avatarImg"
/>
          <h3>Shahzaib Arshad</h3>
          <p>Software Engineer | AI/ML & Flutter Developer</p>

          <div className="miniTags">
            <span>Fast Learner</span>
            <span>Problem Solver</span>
            <span>Creative</span>
          </div>
        </div>
      </section>

      <section id="about" className="section split">
        <div>
          <p className="eyebrow">About Me</p>
          <h2>From idea to working product.</h2>
        </div>

        <p>
          I am a Software Engineering student focused on building intelligent,
          user-friendly, and practical digital solutions. I work with Python,
          React, Flutter, Firebase, FastAPI, Flask, Django, and Machine Learning.
          My goal is to turn real-world problems into clean, reliable, and useful
          software products.
        </p>
      </section>

      <section id="skills" className="section">
        <p className="eyebrow">Tech Stack</p>
        <h2>Skills & Tools</h2>

        <div className="skillGrid">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section id="fyp" className="section">
        <p className="eyebrow">Final Year Project</p>
        <h2>STTP – Speech To Text Predictor</h2>

        <div className="fypCard">
          <h3>AI-Powered Assistive Speech Application</h3>

          <p>
            A real-time intelligent mobile application designed to detect
            stuttering patterns and predict intended words using Machine
            Learning, NLP, Firebase, Flutter, FastAPI, and TensorFlow Lite.
          </p>

          <div className="miniTags">
            <span>Flutter</span>
            <span>FastAPI</span>
            <span>Firebase</span>
            <span>TFLite</span>
            <span>Machine Learning</span>
            <span>NLP</span>
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <p className="eyebrow">Portfolio</p>
        <h2>Featured Projects</h2>

        <div className="projectGrid">
          {projects.map((project, index) => (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="projectCard"
              key={project.title}
            >
              <small>0{index + 1}</small>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <span>{project.tech}</span>
              <em>View Project on LinkedIn →</em>
            </a>
          ))}
        </div>
      </section>

      <section id="certifications" className="section">
        <p className="eyebrow">Achievements</p>
        <h2>Certifications & Internships</h2>

        <div className="certGrid">
          {certifications.map((cert, index) => (
            <a
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              className="certCard"
              key={cert.title}
            >
              <small>0{index + 1}</small>
              <h3>{cert.title}</h3>
              <span>{cert.org}</span>
              <p>{cert.desc}</p>
              <em>View Certificate →</em>
            </a>
          ))}
        </div>
      </section>

      <section id="journey" className="section">
        <p className="eyebrow">Experience</p>
        <h2>Professional Journey</h2>

        <div className="timeline">
          <div>
            <b>Python Developer Intern</b>
            <span>AITSL – Attock Information Technology Services Ltd.</span>
            <p>
              Worked on Flask/Django web systems, backend development,
              deployment, and database handling.
            </p>
          </div>

          <div>
            <b>Python Programming Intern</b>
            <span>Apexcify Technologys</span>
            <p>
              Built Python automation projects, chatbot systems, stock trackers,
              and automation scripts.
            </p>
          </div>

          <div>
            <b>Bachelor of Software Engineering</b>
            <span>Capital University of Science & Technology</span>
            <p>
              Focused on software engineering, web systems, mobile apps, and
              AI/ML-based final year project.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact">
        <p className="eyebrow">Contact</p>
        <h2>Let’s work together.</h2>

        <p>
          Open for internships, freelance work, junior developer roles, and
          AI/mobile app projects.
        </p>

        <div className="contactGrid">
          <a href="mailto:shahzaibarshad2610@gmail.com">
            shahzaibarshad2610@gmail.com
          </a>
          <a href="tel:03035395866">0303-5395866</a>
          <a
            href="https://github.com/malikshahzaib263"
            target="_blank"
            rel="noreferrer"
          >
            github.com/malikshahzaib263
          </a>
          <a
            href="https://www.linkedin.com/in/shahzaib-arshad-5b6479317"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn Profile
          </a>
        </div>
      </section>
      <div className="assistantContainer">

  <button
    className="assistantBtn"
    onClick={() => setOpenAssistant(!openAssistant)}
  >
    🤖
  </button>

  {openAssistant && (
    <div className="assistantBox">

      <div className="assistantTop">
        <div className="assistantAvatar">
          AI
        </div>

        <div>
          <h4>Shahzaib AI Assistant</h4>
          <small>Online</small>
        </div>
      </div>

      <p>
        Hi 👋 I’m Shahzaib’s virtual AI assistant.
        I can introduce his skills, projects,
        AI expertise, and Final Year Project.
      </p>

      <button
        className="speakBtn"
        onClick={speakAssistant}
      >
        🔊 Introduce Shahzaib
      </button>

    </div>
  )}

</div>

      <footer>© 2026 Shahzaib Arshad — Designed & Built with React</footer>
    </main>
  );
  
}