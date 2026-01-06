import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "Ethical and Secure Browsing with TOR",
    description:
      "A secure browsing application developed using Python to enable safe Tor-based access by detecting and blocking illegal or harmful content using scraping, keyword analysis, and machine learning classification. Focuses on ethical and controlled dark web exploration.",
    tags: ["Python", "React.js", "ML", "Electron"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Virtual Job Interview Simulator",
    description:
      "An AI-powered platform designed to conduct mock interviews with real-time feedback using voice and text-based interactions. Helps candidates improve communication and interview performance through intelligent response analysis.",
    tags: ["React.js", "Gemini API", "Python", "Django"],
    github: "https://github.com/NehaVA23/Virtual-Job-Interview",
    
  },
  {
    title: "Student Document Generator",
    description:
      "An automated system for generating academic documents and certificates by retrieving student data from a database, reducing manual effort and improving accuracy and efficiency.",
    tags: ["PHP", "SQL", "HTML", "CSS", "Bootstrap"],
    github: "https://github.com",
    
  },
  {
    title: "SmartSched – Dynamic Classroom Scheduler",
    description:
      "A web-based classroom scheduling system that enables dynamic class management, conflict-free scheduling, and role-based dashboards for admins, teachers, and students. Includes responsive design, form validation, event filtering, and database-driven scheduling.",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "MongoDB", "Node.js"],
    github: "https://github.com/NehaVA23/Scheduling",
    live: "https://scheduling-2-m3ou.onrender.com",
  },
  {
    title: "Tarakpath – Optimal Ship Routing System",
    description:
      "A web-based maritime navigation platform that combines real-time marine and weather data with a custom A* pathfinding engine to chart the fastest, most fuel-efficient sea routes helping reduce costs and environmental impact.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "A* Pathfinding", "Leaflet.js"],
    github: "https://github.com/NehaVA23/JalMarg-2.0",
    
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card hover-glow rounded-2xl p-6 flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <Folder className="w-10 h-10 text-primary" />
                <div className="flex gap-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={20} />
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                </div>
              </div>

              <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 bg-secondary text-muted-foreground rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
