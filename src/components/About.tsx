import { motion } from "framer-motion";
import { Code, Palette, Rocket, Coffee } from "lucide-react";

const skills = [
  { 
    name: "React.js", 
    color: "#61DAFB",
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10" fill="currentColor">
        <path d="M12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"/>
        <path d="M12 21.35c-1.5 0-2.75-.25-3.7-.7-1.25-.6-1.9-1.55-1.9-2.65 0-1.35 1-2.65 2.75-3.7.15-.1.35-.2.55-.3-.1-.3-.2-.55-.25-.8-.65-2.3-.35-4.15.85-4.85.35-.2.75-.35 1.2-.35 1.2 0 2.6.85 4 2.35.3.3.55.65.8 1 .25-.35.55-.7.85-1.05 1.35-1.45 2.7-2.3 3.9-2.3.45 0 .9.1 1.25.35 1.2.7 1.5 2.55.85 4.85-.05.25-.15.5-.25.8.2.1.4.2.55.3 1.75 1.05 2.75 2.35 2.75 3.7 0 1.1-.65 2.05-1.9 2.65-.95.45-2.2.7-3.7.7-1.5 0-2.75-.25-3.7-.7-.15-.05-.25-.15-.4-.2-.15.05-.25.15-.4.2-.95.45-2.2.7-3.7.7h-.1Zm0-2c1.1 0 2.05-.15 2.8-.45.1-.05.2-.1.3-.15-.35-.25-.7-.55-1.05-.85-.65-.55-1.3-1.2-1.9-1.9-.05.05-.1.1-.15.15-.6.7-1.25 1.35-1.9 1.9-.35.3-.7.6-1.05.85.1.05.2.1.3.15.75.3 1.65.45 2.65.3Zm-4.6-3.35c.45.4.95.8 1.45 1.15.15-.2.3-.4.5-.6.55-.65 1.15-1.3 1.8-1.9-.15-.2-.3-.45-.45-.65-.5-.75-.95-1.5-1.3-2.25-.3.1-.55.25-.8.35-1.25.65-2 1.45-2 2.1 0 .45.3.9.85 1.35l-.05.45Zm9.2 0c.55-.45.85-.9.85-1.35 0-.65-.75-1.45-2-2.1-.25-.15-.5-.25-.8-.35-.35.75-.8 1.5-1.3 2.25-.15.2-.3.45-.45.65.65.6 1.25 1.25 1.8 1.9.2.2.35.4.5.6.5-.35 1-.75 1.45-1.15l-.05-.45Zm-4.6-.5c.4-.45.8-.95 1.15-1.45-.4-.05-.75-.05-1.15-.05s-.8 0-1.15.05c.35.5.75 1 1.15 1.45Zm0-4.4c-.25.35-.5.65-.75 1 .25 0 .5-.05.75-.05s.5 0 .75.05c-.25-.35-.5-.65-.75-1Zm-2.55 1.4c.2.3.45.65.7.95.05-.5.15-.95.25-1.45-.35.15-.65.3-.95.5Zm5.1 0c-.3-.2-.6-.35-.95-.5.1.5.2.95.25 1.45.25-.3.5-.65.7-.95ZM8.05 9.7c.25.7.55 1.4.9 2.05.15.25.3.5.5.75.2-.3.4-.55.6-.85.35-.5.75-.95 1.15-1.4-.15-.55-.3-1.1-.4-1.6-.05-.25-.1-.5-.1-.75-.35.15-.7.35-1 .55-.7.4-1.25.85-1.65 1.25Zm7.9 0c-.4-.4-.95-.85-1.65-1.25-.3-.2-.65-.35-1-.5 0 .25-.05.5-.1.75-.1.5-.25 1.05-.4 1.6.4.45.8.9 1.15 1.4.2.3.4.55.6.85.2-.25.35-.5.5-.75.35-.7.65-1.35.9-2.1Zm-3.95-3c.45-.5.9-.95 1.35-1.3.4-.35.8-.6 1.2-.8-.2-.05-.35-.05-.55-.05-.85 0-1.85.6-2.85 1.6-.15.15-.3.35-.45.5.1.05.2.05.3.05Zm0 0c-.1 0-.2 0-.3-.05-.15-.15-.3-.35-.45-.5-1-1-2-1.6-2.85-1.6-.2 0-.35 0-.55.05.4.2.8.45 1.2.8.45.35.9.8 1.35 1.3h1.6Z"/>
      </svg>
    )
  },
  { 
    name: "JavaScript", 
    color: "#F7DF1E",
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10" fill="currentColor">
        <path d="M3 3h18v18H3V3zm16.525 13.707c-.131-.821-.666-1.511-2.252-2.155-.552-.259-1.165-.438-1.349-.854-.068-.248-.078-.382-.034-.529.113-.484.687-.629 1.137-.495.293.09.563.315.732.676.775-.507.775-.507 1.316-.844-.2-.314-.304-.454-.44-.586-.473-.528-1.103-.798-2.126-.775l-.528.067c-.507.124-.991.395-1.283.754-.855.968-.608 2.655.427 3.354 1.023.765 2.521.933 2.712 1.653.18.878-.652 1.159-1.475 1.058-.607-.136-.945-.439-1.316-1.002l-1.372.788c.157.359.337.517.607.832 1.305 1.316 4.568 1.249 5.153-.754.021-.067.18-.492.103-1.188zm-7.612-5.641h-1.721c0 1.295-.007 2.585-.007 3.882 0 .825.043 1.583-.085 1.816-.201.42-.718.37-.949.287-.238-.1-.354-.244-.497-.46-.037-.065-.064-.123-.089-.147l-1.364.843c.229.472.563.879.994 1.137.641.383 1.502.507 2.404.305.588-.17 1.095-.519 1.358-1.059.384-.697.302-1.553.299-2.509.008-1.541 0-3.083 0-4.635l.056.54z"/>
      </svg>
    )
  },
  { 
    name: "Python", 
    color: "#3776AB",
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10" fill="currentColor">
        <path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.007 2.752h5.814v.826H3.9S0 5.789 0 11.969c0 6.18 3.403 5.96 3.403 5.96h2.03v-2.867s-.109-3.42 3.35-3.42h5.766s3.24.052 3.24-3.148V3.202S18.28 0 11.913 0zM8.708 1.85c.578 0 1.046.47 1.046 1.052 0 .58-.468 1.051-1.046 1.051-.579 0-1.046-.47-1.046-1.051s.467-1.052 1.046-1.052z"/>
        <path d="M12.087 24c6.093 0 5.713-2.656 5.713-2.656l-.007-2.752h-5.814v-.826h8.121s3.9.445 3.9-5.735c0-6.18-3.403-5.96-3.403-5.96h-2.03v2.867s.109 3.42-3.35 3.42H9.45s-3.24-.052-3.24 3.148v5.292S5.72 24 12.087 24zm3.206-1.85c-.578 0-1.046-.47-1.046-1.052 0-.58.468-1.051 1.046-1.051.579 0 1.046.47 1.046 1.051s-.467 1.052-1.046 1.052z"/>
      </svg>
    )
  },
  { 
    name: "Java", 
    color: "#ED8B00",
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10" fill="currentColor">
        <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.93.828-.093-953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639"/>
      </svg>
    )
  },
  { 
    name: "HTML5", 
    color: "#E34F26",
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10" fill="currentColor">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
      </svg>
    )
  },
  { 
    name: "CSS3", 
    color: "#1572B6",
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10" fill="currentColor">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
      </svg>
    )
  },
  { 
    name: "Tailwind CSS", 
    color: "#06B6D4",
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10" fill="currentColor">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
      </svg>
    )
  },
  { 
    name: "MongoDB", 
    color: "#47A248",
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10" fill="currentColor">
        <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"/>
      </svg>
    )
  },
  { 
    name: "SQL", 
    color: "#4479A1",
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10" fill="currentColor">
        <path d="M12 3C7.58 3 4 4.79 4 7v10c0 2.21 3.59 4 8 4s8-1.79 8-4V7c0-2.21-3.58-4-8-4zm0 2c3.87 0 6 1.5 6 2s-2.13 2-6 2-6-1.5-6-2 2.13-2 6-2zm6 12c0 .5-2.13 2-6 2s-6-1.5-6-2v-2.23c1.61.78 3.72 1.23 6 1.23s4.39-.45 6-1.23V17zm0-4c0 .5-2.13 2-6 2s-6-1.5-6-2v-2.23c1.61.78 3.72 1.23 6 1.23s4.39-.45 6-1.23V13zm0-4c0 .5-2.13 2-6 2s-6-1.5-6-2V6.77C7.61 7.55 9.72 8 12 8s4.39-.45 6-1.23V9z"/>
      </svg>
    )
  },
  { 
    name: "PHP", 
    color: "#777BB4",
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10" fill="currentColor">
        <path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 01-.349.883c-.163.283-.381.528-.517.667zm4.89-1.98h-.897l-.515 2.648h.569c.682 0 1.181-.212 1.498-.635.316-.424.515-1.048.595-1.872-.075-.094-.195-.141-.361-.141h-.889zm3.45-1.675l-.38 1.95h1.075c.548 0 .946-.113 1.195-.339.25-.227.418-.592.504-1.095.08-.411.026-.706-.161-.886-.188-.18-.535-.27-1.042-.27h-.897l-.294.64zm-1.358-.04l-.327 1.68H14.07l1.23-6.325h2.557c.831 0 1.413.198 1.745.594.333.396.407.977.223 1.742-.108.449-.294.835-.558 1.158-.265.323-.598.574-.997.754-.4.18-.912.274-1.535.274l.187.123z"/>
      </svg>
    )
  },
];

const features = [
  {
    icon: Code,
    title: "Clean Code",
    description: "Writing maintainable and scalable code",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating beautiful user interfaces",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Optimizing for speed and efficiency",
  },
  {
    icon: Coffee,
    title: "Problem Solving",
    description: "Finding creative solutions",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know me better and discover what drives my passion for development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card glow-border rounded-2xl p-8">
              <h3 className="text-2xl font-display font-semibold mb-4 text-foreground">
                Who am I?
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Hi, I’m Neha, a passionate Software and Full Stack Developer with a strong interest in building clean, functional, and user-friendly web applications. 
                I enjoy turning ideas into practical solutions through well-structured code and intuitive design.
                </p>
<p className="text-muted-foreground leading-relaxed mb-6">
I have hands-on experience working with modern web technologies such as React.js, Python, Django, SQL, and 
Machine Learning, and I continuously explore new tools to strengthen my development skills. 
I value writing efficient code and following good development practices to create reliable applications.
</p>
<p className="text-muted-foreground leading-relaxed mb-6">
Outside the terminal, I’m passionate about dance and cultural performances, 
using creativity and discipline to express myself beyond code.
      </p>        
              <p className="text-muted-foreground leading-relaxed">
                Education: B. Tech in Information Technology 
                K.K.Wagh Institute of Engineering Education and 
                Research, Nashik | Sept 2022 – May 2026 
                CGPA: 8.80/10.0

        
              </p>

              {/* Feature Cards */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-secondary/50 rounded-xl p-4 text-center"
                  >
                    <feature.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                    <h4 className="font-semibold text-sm text-foreground">
                      {feature.title}
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card glow-border rounded-2xl p-8">
              <h3 className="text-2xl font-display font-semibold mb-6 text-foreground">
                My Skills
              </h3>
              <div className="grid grid-cols-3 gap-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ 
                      scale: 1.15, 
                      rotate: [0, -10, 10, 0],
                      transition: { duration: 0.3 }
                    }}
                    className="flex flex-col items-center justify-center p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-all duration-300 cursor-pointer group"
                  >
                    <motion.div 
                      className="relative mb-3"
                      style={{ color: skill.color }}
                      whileHover={{ 
                        filter: "drop-shadow(0 0 12px currentColor)",
                      }}
                    >
                      {/* Glow effect */}
                      <motion.div
                        className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                        style={{ backgroundColor: skill.color }}
                      />
                      {skill.icon}
                    </motion.div>
                    <motion.span 
                      className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300 text-center"
                    >
                      {skill.name}
                    </motion.span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
