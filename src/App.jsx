import { useEffect, useState } from "react";
import "./App.css";
import profileImage from "./assets/profile.jpg";

/* =========================
   NAVBAR
========================= */
function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="nav-container">

        <a href="#home" className="logo" onClick={closeMenu}>
          <span className="logo-mark">A</span>
          <span className="logo-text">
            ANKITA<span>.</span>
          </span>
        </a>

        <nav className={`nav-links ${menuOpen ? "show-menu" : ""}`}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#education" onClick={closeMenu}>Education</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>

        <div className="nav-actions">

          <button
            className="theme-btn"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Change theme"
          >
            {darkMode ? "☀" : "☾"}
          </button>

          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>

      </div>
    </header>
  );
}


/* =========================
   HERO
========================= */
function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-grid"></div>

      <div className="glow glow-one"></div>
      <div className="glow glow-two"></div>

      <div className="hero-container">

        <div className="hero-content">

          <div className="availability">
            <span></span>
            Available for learning & opportunities
          </div>

          <p className="hero-intro">
            HELLO, I'M
          </p>

          <h1>
            Ankita
            <span>Jana</span>
          </h1>

          <div className="hero-role">
            <span>Computer Science Student</span>
            <b>•</b>
            <span>Developer</span>
            <b>•</b>
            <span>Learner</span>
          </div>

          <p className="hero-description">
            I love transforming ideas into beautiful and functional
            digital experiences. I enjoy coding, exploring new
            technologies and building practical projects that solve
            real-world problems.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="btn primary-btn">
              Explore My Work
              <span>↗</span>
            </a>

            <a href="#contact" className="btn outline-btn">
              Let's Connect
            </a>

          </div>

          <div className="hero-socials">

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>

            <a href="mailto:ankita@example.com">
              Email ↗
            </a>

          </div>

        </div>


        <div className="hero-visual">

          <div className="photo-ring ring-one"></div>
          <div className="photo-ring ring-two"></div>

          <div className="profile-photo-wrapper">

            <img
              src={profileImage}
              alt="Ankita Jana"
              className="profile-photo"
            />

          </div>


          <div className="floating-badge badge-top">
            <span>✦</span>
            <div>
              <strong>Creative</strong>
              <small>Mindset</small>
            </div>
          </div>


          <div className="floating-badge badge-bottom">
            <span>⌘</span>
            <div>
              <strong>Developer</strong>
              <small>In Progress</small>
            </div>
          </div>


          <div className="orbit-dot dot-one"></div>
          <div className="orbit-dot dot-two"></div>
          <div className="orbit-dot dot-three"></div>

        </div>

      </div>

      <div className="scroll-hint">
        <span></span>
        Scroll to explore
      </div>

    </section>
  );
}


/* =========================
   SECTION TITLE
========================= */
function SectionTitle({ number, eyebrow, title, text }) {
  return (
    <div className="section-heading">

      <div className="heading-number">
        {number}
      </div>

      <div>
        <span className="eyebrow">
          {eyebrow}
        </span>

        <h2>{title}</h2>

        <p>{text}</p>
      </div>

    </div>
  );
}


/* =========================
   ABOUT
========================= */
function About() {
  return (
    <section id="about" className="section">

      <SectionTitle
        number="01"
        eyebrow="GET TO KNOW ME"
        title="About Me"
        text="A short introduction about my journey, interests and goals."
      />

      <div className="about-layout">

        <div className="about-main">

          <h3>
            Learning today.
            <span> Building tomorrow.</span>
          </h3>

          <p>
            I am Ankita Jana, a Computer Science student who is
            passionate about technology, programming and creative
            problem solving.
          </p>

          <p>
            My learning journey includes web development, Java,
            React, databases and programming concepts. I enjoy
            taking an idea and turning it into an interactive
            project.
          </p>

          <p>
            I believe that every project is an opportunity to learn
            something new and improve my skills.
          </p>

          <div className="about-tags">
            <span>Problem Solver</span>
            <span>Quick Learner</span>
            <span>Creative Thinker</span>
            <span>Tech Explorer</span>
          </div>

        </div>


        <div className="about-side">

          <div className="mini-card">
            <span className="mini-icon">💻</span>
            <div>
              <strong>Development</strong>
              <p>Building practical applications</p>
            </div>
          </div>

          <div className="mini-card">
            <span className="mini-icon">🧠</span>
            <div>
              <strong>Learning</strong>
              <p>Always exploring new technologies</p>
            </div>
          </div>

          <div className="mini-card">
            <span className="mini-icon">🚀</span>
            <div>
              <strong>Growth</strong>
              <p>Improving through every project</p>
            </div>
          </div>

        </div>

      </div>


      <div className="stats">

        <div>
          <strong>10+</strong>
          <span>Projects</span>
        </div>

        <div>
          <strong>8+</strong>
          <span>Technologies</span>
        </div>

        <div>
          <strong>100%</strong>
          <span>Curiosity</span>
        </div>

        <div>
          <strong>∞</strong>
          <span>Learning</span>
        </div>

      </div>

    </section>
  );
}


/* =========================
   EDUCATION
========================= */
function Education() {
  return (
    <section id="education" className="section alt-section">

      <SectionTitle
        number="02"
        eyebrow="MY ACADEMIC JOURNEY"
        title="Education"
        text="The academic foundation behind my technical journey."
      />

      <div className="education-timeline">

        <div className="education-item">

          <div className="education-marker">
            01
          </div>

          <div className="education-card">

            <div className="education-top">
              <span>Present</span>
              <span>🎓</span>
            </div>

            <h3>
              Computer Science / Computer Application
            </h3>

            <h4>
              Undergraduate Studies
            </h4>

            <p>
              Developing knowledge in programming, software
              development, databases, web technologies and
              computer science concepts.
            </p>

          </div>

        </div>


        <div className="education-item">

          <div className="education-marker">
            02
          </div>

          <div className="education-card">

            <div className="education-top">
              <span>Completed</span>
              <span>📚</span>
            </div>

            <h3>
              Higher Secondary Education
            </h3>

            <h4>
              Academic Foundation
            </h4>

            <p>
              Built a strong academic foundation while developing
              an interest in computers, logical thinking and
              technology.
            </p>

          </div>

        </div>


        <div className="education-item">

          <div className="education-marker">
            03
          </div>

          <div className="education-card">

            <div className="education-top">
              <span>Completed</span>
              <span>🏫</span>
            </div>

            <h3>
              Secondary Education
            </h3>

            <h4>
              School Education
            </h4>

            <p>
              Developed foundational knowledge, curiosity and
              problem-solving skills.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}


/* =========================
   SKILLS
========================= */
function Skills() {

  const skills = [
    ["HTML5", 90],
    ["CSS3", 88],
    ["JavaScript", 78],
    ["React", 82],
    ["Java", 80],
    ["Python", 72],
    ["SQL", 76],
    ["Git & GitHub", 70]
  ];

  return (
    <section id="skills" className="section">

      <SectionTitle
        number="03"
        eyebrow="WHAT I WORK WITH"
        title="Skills"
        text="Technologies and tools I use while learning and building projects."
      />

      <div className="skills-layout">

        <div className="skills-panel">

          {skills.map(([name, percentage]) => (

            <div className="skill" key={name}>

              <div className="skill-label">
                <span>{name}</span>
                <b>{percentage}%</b>
              </div>

              <div className="skill-track">
                <div
                  className="skill-fill"
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>

            </div>

          ))}

        </div>


        <div className="tech-panel">

          <div className="tech-header">
            <span>TECH STACK</span>
            <strong>01 — 12</strong>
          </div>

          <h3>
            Tools I love
            <span> exploring.</span>
          </h3>

          <div className="tech-list">

            <span>HTML5</span>
            <span>CSS3</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>Java</span>
            <span>Python</span>
            <span>SQL</span>
            <span>Git</span>
            <span>GitHub</span>
            <span>Vite</span>
            <span>MySQL</span>
            <span>VS Code</span>

          </div>

        </div>

      </div>

    </section>
  );
}


/* =========================
   SERVICES
========================= */
function Services() {

  const services = [
    {
      icon: "01",
      title: "Web Development",
      text: "Responsive and modern websites using HTML, CSS, JavaScript and React."
    },
    {
      icon: "02",
      title: "React Development",
      text: "Interactive interfaces using reusable React components and JSX."
    },
    {
      icon: "03",
      title: "Java Development",
      text: "Object-oriented programming and practical Java applications."
    },
    {
      icon: "04",
      title: "Database",
      text: "Working with SQL, MySQL and structured data management."
    },
    {
      icon: "05",
      title: "UI Design",
      text: "Creating clean, attractive and user-friendly digital interfaces."
    },
    {
      icon: "06",
      title: "Problem Solving",
      text: "Using programming logic and algorithms to solve challenges."
    }
  ];

  return (
    <section className="section services-section">

      <SectionTitle
        number="04"
        eyebrow="MY INTERESTS"
        title="What I Do"
        text="Areas where I enjoy learning, experimenting and creating."
      />

      <div className="services-grid">

        {services.map((service) => (

          <div className="service-card" key={service.icon}>

            <span className="service-number">
              {service.icon}
            </span>

            <div className="service-icon">
              {["💻", "⚛️", "☕", "🗄️", "✦", "🧠"][
                Number(service.icon) - 1
              ]}
            </div>

            <h3>{service.title}</h3>

            <p>{service.text}</p>

            <span className="service-arrow">
              ↗
            </span>

          </div>

        ))}

      </div>

    </section>
  );
}


/* =========================
   PROJECTS
========================= */
function Projects() {

  const projects = [
    {
      no: "01",
      icon: "♻️",
      title: "Smart Waste Management",
      tech: "React • TypeScript • Supabase",
      text: "A smart platform for waste reporting, management, citizen participation and real-time interaction."
    },
    {
      no: "02",
      icon: "👥",
      title: "Employee Directory",
      tech: "React • JavaScript • CSS",
      text: "A responsive employee directory with an attractive interface and useful search and filtering features."
    },
    {
      no: "03",
      icon: "🏫",
      title: "Training Institute Portal",
      tech: "Java • JSP • Tomcat",
      text: "A training institute management portal with students, batches, teachers and administrative features."
    },
    {
      no: "04",
      icon: "🎓",
      title: "Student Management",
      tech: "Java • Database",
      text: "A student management application for maintaining student information and academic records."
    },
    {
      no: "05",
      icon: "🤖",
      title: "AI Learning Project",
      tech: "Python • AI",
      text: "An academic project focused on artificial intelligence concepts and intelligent problem solving."
    },
    {
      no: "06",
      icon: "✨",
      title: "Personal Portfolio",
      tech: "React • JSX • CSS",
      text: "A modern responsive portfolio showcasing my education, skills, projects and contact information."
    }
  ];

  return (
    <section id="projects" className="section alt-section">

      <SectionTitle
        number="05"
        eyebrow="SELECTED WORK"
        title="Projects"
        text="A few projects from my learning and development journey."
      />

      <div className="projects-grid">

        {projects.map((project) => (

          <article className="project-card" key={project.no}>

            <div className="project-card-top">

              <span>
                {project.no}
              </span>

              <div className="project-icon">
                {project.icon}
              </div>

            </div>

            <h3>
              {project.title}
            </h3>

            <div className="project-tech">
              {project.tech}
            </div>

            <p>
              {project.text}
            </p>

            <a href="#contact">
              Discuss Project
              <span>↗</span>
            </a>

          </article>

        ))}

      </div>

    </section>
  );
}


/* =========================
   CONTACT
========================= */
function Contact() {

  const [sent, setSent] = useState(false);

  const handleSubmit = (event) => {

    event.preventDefault();

    setSent(true);

    event.target.reset();

    setTimeout(() => {
      setSent(false);
    }, 4000);
  };

  return (
    <section id="contact" className="section contact-section">

      <SectionTitle
        number="06"
        eyebrow="GET IN TOUCH"
        title="Let's Connect"
        text="Have an idea, question or opportunity? Send me a message."
      />

      <div className="contact-layout">

        <div className="contact-left">

          <h3>
            Let's build something
            <span> meaningful.</span>
          </h3>

          <p>
            I am always interested in learning new technologies,
            discussing ideas and working on interesting projects.
          </p>

          <div className="contact-details">

            <a href="mailto:ankita@example.com">
              <span>✉</span>
              <div>
                <small>EMAIL</small>
                ankita@123.com
              </div>
            </a>

            <div>
              <span>☎</span>
              <div>
                <small>PHONE</small>
                +91 9635469192
              </div>
            </div>

            <div>
              <span>⌖</span>
              <div>
                <small>LOCATION</small>
                West Bengal, India
              </div>
            </div>

          </div>

        </div>


        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <div className="input-row">

            <input
              type="text"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              required
            />

          </div>

          <input
            type="text"
            placeholder="Subject"
            required
          />

          <textarea
            rows="6"
            placeholder="Tell me about your idea..."
            required
          ></textarea>

          <button
            type="submit"
            className="send-btn"
          >
            Send Message
            <span>↗</span>
          </button>

          {sent && (
            <div className="success">
              ✓ Message submitted successfully!
            </div>
          )}

        </form>

      </div>

    </section>
  );
}


/* =========================
   FOOTER
========================= */
function Footer() {
  return (
    <footer className="footer">

      <div className="footer-main">

        <div>

          <a href="#home" className="footer-logo">
            AJ<span>.</span>
          </a>

          <p>
            Learning. Building. Growing.
          </p>

        </div>

        <div className="footer-links">

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>

        </div>

      </div>


      <div className="footer-bottom">

        <span>
          © {new Date().getFullYear()} Ankita Jana
        </span>

        <span>
          Made with React & ❤️
        </span>

      </div>

    </footer>
  );
}


/* =========================
   BACK TO TOP
========================= */
function BackToTop() {

  const [visible, setVisible] = useState(false);

  useEffect(() => {

    const onScroll = () => {
      setVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };

  }, []);

  if (!visible) return null;

  return (
    <button
      className="back-top"
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        })
      }
    >
      ↑
    </button>
  );
}


/* =========================
   SCROLL PROGRESS
========================= */
function ScrollProgress() {

  const [progress, setProgress] = useState(0);

  useEffect(() => {

    const updateProgress = () => {

      const scrollTop = window.scrollY;

      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const percentage =
        totalHeight > 0
          ? (scrollTop / totalHeight) * 100
          : 0;

      setProgress(percentage);
    };

    window.addEventListener("scroll", updateProgress);

    updateProgress();

    return () => {
      window.removeEventListener("scroll", updateProgress);
    };

  }, []);

  return (
    <div
      className="scroll-progress"
      style={{ width: `${progress}%` }}
    ></div>
  );
}


/* =========================
   APP
========================= */
function App() {

  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {

    document.body.className = darkMode
      ? "dark-theme"
      : "light-theme";

  }, [darkMode]);

  return (
    <div className={`app ${darkMode ? "dark" : "light"}`}>

      <ScrollProgress />

      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <main>

        <Hero />

        <About />

        <Education />

        <Skills />

        <Services />

        <Projects />

        <Contact />

      </main>

      <Footer />

      <BackToTop />

    </div>
  );
}

export default App;