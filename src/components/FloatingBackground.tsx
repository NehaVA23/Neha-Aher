import { motion } from "framer-motion";

const shapes = [
  { size: 80, x: "10%", y: "20%", delay: 0, duration: 8 },
  { size: 120, x: "80%", y: "15%", delay: 1, duration: 10 },
  { size: 60, x: "70%", y: "60%", delay: 2, duration: 7 },
  { size: 100, x: "15%", y: "70%", delay: 3, duration: 9 },
  { size: 50, x: "50%", y: "80%", delay: 1.5, duration: 11 },
  { size: 90, x: "85%", y: "85%", delay: 0.5, duration: 8 },
  { size: 70, x: "30%", y: "40%", delay: 2.5, duration: 12 },
  { size: 40, x: "60%", y: "30%", delay: 3.5, duration: 9 },
];

const FloatingBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-gradient-to-br from-primary/20 to-glow-secondary/20 blur-xl"
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
    </div>
  );
};

export default FloatingBackground;
