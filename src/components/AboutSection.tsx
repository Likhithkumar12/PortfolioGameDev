import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Gamepad2, Lightbulb, Zap } from 'lucide-react';
import developerAvatar from '@/assets/developer-avatar.jpg';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    { icon: Gamepad2, label: "Unity Expert" },
    { icon: Code2, label: "C# Developer" },
    { icon: Lightbulb, label: "Problem Solver" },
    { icon: Zap, label: "Performance Optimizer" },
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative frame */}
              <div className="absolute inset-0 border-2 border-primary/30 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500" />
              <div className="absolute inset-0 border-2 border-secondary/30 rounded-2xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500" />
              
              {/* Main image container */}
              <div className="relative overflow-hidden rounded-2xl glass-card p-2">
                <div className="aspect-square rounded-xl overflow-hidden">
                  <img 
                    src={developerAvatar} 
                    alt="Game Developer Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 px-4 py-2 glass-card rounded-full border border-primary/30"
              >
                <span className="font-display text-xs text-primary">5+ Years</span>
              </motion.div>
              
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 px-4 py-2 glass-card rounded-full border border-secondary/30"
              >
                <span className="font-display text-xs text-secondary">10+ Games</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Section Label */}
            <div className="inline-flex items-center gap-2">
              <span className="w-12 h-0.5 bg-gradient-to-r from-primary to-transparent" />
              <span className="font-display text-sm uppercase tracking-widest text-primary">About Me</span>
            </div>

            {/* Title */}
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl">
              Crafting Immersive
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Gaming Experiences
              </span>
            </h2>

            {/* Description */}
            <div className="space-y-4 text-muted-foreground font-body text-lg leading-relaxed">
              <p>
                I'm a passionate Game Developer with a deep love for creating interactive experiences that captivate players. 
                With expertise in Unity Engine and C#, I specialize in building robust gameplay systems that are both fun and performant.
              </p>
              <p>
                From designing intuitive UI systems to optimizing complex game mechanics, 
                I bring a detail-oriented approach to every project. 
                My goal is to push the boundaries of what's possible in game development while maintaining clean, maintainable code.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-xl glass-card border border-border/50 hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="font-display text-sm">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
