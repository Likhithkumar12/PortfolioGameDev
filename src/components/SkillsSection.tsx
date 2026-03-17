import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Code2, Cpu, Gamepad2, GitBranch, 
  Monitor, Palette, Settings, Wifi 
} from 'lucide-react';

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Game Engines & Dev",
      icon: Gamepad2,
      color: "primary",
      skills: [
        { name: "Unity (2D/3D)", level: 95 },
        { name: "Gameplay Programming", level: 92 },
        { name: "Physics (Rigidbody, Joints)", level: 90 },
      ]
    },
    {
      title: "Programming",
      icon: Code2,
      color: "secondary",
      skills: [
        { name: "C#", level: 95 },
        { name: "C++", level: 70 },
        { name: "OOP & Design Patterns", level: 90 },
      ]
    },
    {
      title: "Multiplayer",
      icon: Wifi,
      color: "accent",
      skills: [
        { name: "Photon Fusion", level: 90 },
        { name: "Client-Server Architecture", level: 85 },
        { name: "Network Sync & Latency", level: 85 },
      ]
    },
    {
      title: "Gameplay Systems",
      icon: Cpu,
      color: "neon-cyan",
      skills: [
        { name: "AI (State Machines, NavMesh)", level: 88 },
        { name: "Player Controllers", level: 95 },
        { name: "ScriptableObjects / ECS", level: 85 },
      ]
    },
    {
      title: "UI & Animation",
      icon: Palette,
      color: "neon-purple",
      skills: [
        { name: "Unity Canvas & UI Toolkit", level: 90 },
        { name: "Cinemachine & Animation", level: 85 },
        { name: "TextMeshPro / Responsive UI", level: 88 },
      ]
    },
    {
      title: "Tools & Optimization",
      icon: Settings,
      color: "neon-blue",
      skills: [
        { name: "Git & Rider", level: 92 },
        { name: "Unity Profiler & Debugging", level: 88 },
        { name: "Object Pooling & Addressables", level: 85 },
      ]
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; glow: string; bar: string }> = {
      primary: { bg: "bg-primary/10", text: "text-primary", glow: "shadow-[0_0_20px_hsl(var(--neon-purple)/0.3)]", bar: "from-primary to-primary/60" },
      secondary: { bg: "bg-secondary/10", text: "text-secondary", glow: "shadow-[0_0_20px_hsl(var(--neon-cyan)/0.3)]", bar: "from-secondary to-secondary/60" },
      accent: { bg: "bg-accent/10", text: "text-accent", glow: "shadow-[0_0_20px_hsl(var(--neon-blue)/0.3)]", bar: "from-accent to-accent/60" },
      "neon-cyan": { bg: "bg-neon-cyan/10", text: "text-neon-cyan", glow: "shadow-[0_0_20px_hsl(var(--neon-cyan)/0.3)]", bar: "from-neon-cyan to-neon-cyan/60" },
      "neon-purple": { bg: "bg-neon-purple/10", text: "text-neon-purple", glow: "shadow-[0_0_20px_hsl(var(--neon-purple)/0.3)]", bar: "from-neon-purple to-neon-purple/60" },
      "neon-blue": { bg: "bg-neon-blue/10", text: "text-neon-blue", glow: "shadow-[0_0_20px_hsl(var(--neon-blue)/0.3)]", bar: "from-neon-blue to-neon-blue/60" },
    };
    return colors[color] || colors.primary;
  };

  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-12 h-0.5 bg-gradient-to-r from-transparent to-primary" />
            <span className="font-display text-sm uppercase tracking-widest text-primary">Skills</span>
            <span className="w-12 h-0.5 bg-gradient-to-l from-transparent to-primary" />
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
            Technical
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"> Arsenal</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building high-performance multiplayer gaming experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => {
            const colorClasses = getColorClasses(category.color);
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                className={`group p-6 rounded-2xl glass-card border border-border/50 hover:border-primary/30 transition-all duration-500 hover:${colorClasses.glow}`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl ${colorClasses.bg} ${colorClasses.text} transition-all duration-300`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-semibold text-lg">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-body text-sm text-muted-foreground">{skill.name}</span>
                        <span className={`font-display text-xs ${colorClasses.text}`}>{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: 0.3 + catIndex * 0.1 + skillIndex * 0.1 }}
                          className={`skill-bar-fill bg-gradient-to-r ${colorClasses.bar}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
