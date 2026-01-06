import { motion } from "framer-motion";
import { Trophy, Award, MapPin, Calendar } from "lucide-react";

const achievements = [
  {
    title: "Smart India Hackathon (SIH)",
    status: "Finalist",
    year: "2024",
    location: "Hyderabad",
    description:
      "Selected as a national level finalist for developing a tech solution to environmental challenges by the Ministry of Earth Sciences.",
    icon: Trophy,
    gradient: "from-amber-500 to-orange-600",
  },
  {
    title: "VCET National Level Hackathon",
    status: "Finalist",
    year: "Oct 2024",
    location: "Mumbai",
    description:
      "Honored for creating a socially driven tech solution that stood out among leading innovations across the country.",
    icon: Award,
    gradient: "from-purple-500 to-pink-600",
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            My <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Recognition and milestones from national-level competitions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <div className="glass-card glow-border rounded-2xl p-8 h-full relative overflow-hidden">
                {/* Animated background gradient */}
                <motion.div
                  className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${achievement.gradient} rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Icon with glow */}
                <motion.div
                  className="relative mb-6"
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${achievement.gradient} flex items-center justify-center shadow-lg`}
                  >
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  <motion.div
                    className={`absolute inset-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${achievement.gradient} blur-xl opacity-50`}
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.5, 0.3, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>

                {/* Title and Status */}
                <div className="mb-4">
                  <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                    {achievement.title}
                  </h3>
                  <motion.span
                    className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r ${achievement.gradient} text-white`}
                    whileHover={{ scale: 1.05 }}
                  >
                    🏆 {achievement.status}
                  </motion.span>
                </div>

                {/* Meta info */}
                <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>{achievement.year}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>{achievement.location}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {achievement.description}
                </p>

                {/* Decorative line */}
                <motion.div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${achievement.gradient}`}
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
