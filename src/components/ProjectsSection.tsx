import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Gamepad2, Github, PersonStanding, Footprints } from 'lucide-react';
import { Button } from './ui/button';

interface Project {
  id: number;
  title: string;
  description: string;
  icon: typeof Gamepad2;
  techStack: string[];
  githubUrl?: string;
  featured?: boolean;
}

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects: Project[] = [
    {
      id: 1,
      title: "CarLeague",
      description: "Fast-paced multiplayer vehicle game inspired by Rocket League. Built real-time networking with Photon Fusion, arcade vehicle physics, client-server architecture for state sync and latency handling, plus goal scoring and tick-based optimization.",
      icon: Gamepad2,
      techStack: ["Unity", "C#", "Photon Fusion", "Multiplayer", "Physics"],
      githubUrl: "https://github.com/Likhithkumar12/CarLeague.git",
      featured: true,
    },
    {
      id: 2,
      title: "Advanced Character Controller",
      description: "Custom Unity character controller delivering smooth, physics-based movement beyond Unity's defaults. Features state-based architecture (idle, moving, jumping), camera-relative control, and a modular reusable design optimized for performance.",
      icon: PersonStanding,
      techStack: ["Unity", "C#", "Physics", "State Machine", "Modular"],
      githubUrl: "https://github.com/Likhithkumar12/Advanced-Character-Controller-Unity-.git",
      featured: true,
    },
    {
      id: 3,
      title: "Royal Run",
      description: "Endless runner with procedurally generated environments, lane switching, jumping, and obstacle avoidance. Includes object pooling for performance, dynamic difficulty progression, and a score & reward system to drive engagement.",
      icon: Footprints,
      techStack: ["Unity", "C#", "Procedural Gen", "Object Pooling"],
      githubUrl: "https://github.com/Likhithkumar12/RoyalRun.git",
    },
  ];

  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-background opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-12 h-0.5 bg-gradient-to-r from-transparent to-secondary" />
            <span className="font-display text-sm uppercase tracking-widest text-secondary">Portfolio</span>
            <span className="w-12 h-0.5 bg-gradient-to-l from-transparent to-secondary" />
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
            Featured
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary"> Projects</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            Games and interactive experiences I've designed and developed
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden glass-card border border-border/50 hover:border-primary/50 transition-all duration-500"
            >
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary border border-primary/30 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <project.icon className="w-6 h-6" />
                  </div>
                  {project.featured && (
                    <span className="px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-display">
                      Featured
                    </span>
                  )}
                </div>

                <h3 className="font-display font-semibold text-xl group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded text-xs font-body bg-muted text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.githubUrl && (
                  <Button variant="outline" size="sm" asChild className="w-full">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View on GitHub
                    </a>
                  </Button>
                )}
              </div>

              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-2xl shadow-[inset_0_0_30px_hsl(var(--neon-purple)/0.2)]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
