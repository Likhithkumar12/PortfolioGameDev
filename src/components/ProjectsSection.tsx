import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, Play, X } from 'lucide-react';
import { Button } from './ui/button';

// Import project images
import projectCosmicRaider from '@/assets/project-cosmic-raider.jpg';
import projectKingdomBuilder from '@/assets/project-kingdom-builder.jpg';
import projectNeonRunner from '@/assets/project-neon-runner.jpg';
import projectPuzzle from '@/assets/project-puzzle.jpg';
import projectBattleArena from '@/assets/project-battle-arena.jpg';
import projectHorror from '@/assets/project-horror.jpg';

interface Project {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  techStack: string[];
  videoUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Cosmic Raider",
      description: "A fast-paced space shooter with procedural level generation, complex AI patterns, and fluid combat mechanics. Features particle systems and optimized mobile performance.",
      thumbnail: projectCosmicRaider,
      techStack: ["Unity", "C#", "Shader Graph", "Firebase"],
      videoUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Kingdom Builder",
      description: "City-building strategy game with deep economy systems, resource management, and real-time battle mechanics. Implemented save system and cloud sync.",
      thumbnail: projectKingdomBuilder,
      techStack: ["Unity", "C#", "Addressables", "PlayFab"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true,
    },
    {
      id: 3,
      title: "Neon Runner",
      description: "Endless runner with procedural obstacles, DOTween-powered animations, and smooth 60fps gameplay. Integrated ads and IAP systems.",
      thumbnail: projectNeonRunner,
      techStack: ["Unity", "C#", "DOTween", "Unity Ads"],
      videoUrl: "#",
      liveUrl: "#",
    },
    {
      id: 4,
      title: "Puzzle Dimensions",
      description: "Mind-bending puzzle game with custom physics, level editor, and 100+ handcrafted levels. Features localization for 10 languages.",
      thumbnail: projectPuzzle,
      techStack: ["Unity", "C#", "Custom Physics", "i18n"],
      githubUrl: "#",
    },
    {
      id: 5,
      title: "Battle Arena",
      description: "Multiplayer action game with real-time combat, character progression, and ranked matchmaking. Implemented using Photon networking.",
      thumbnail: projectBattleArena,
      techStack: ["Unity", "C#", "Photon", "Firebase Auth"],
      videoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 6,
      title: "Horror Tales",
      description: "Atmospheric horror adventure with dynamic lighting, immersive audio design, and branching narrative. URP render pipeline optimized.",
      thumbnail: projectHorror,
      techStack: ["Unity", "C#", "URP", "FMOD"],
      liveUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-background opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="section-container relative z-10" ref={ref}>
        {/* Section Header */}
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
            A showcase of games and interactive experiences I've built
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative rounded-2xl overflow-hidden glass-card border border-border/50 hover:border-primary/50 transition-all duration-500 ${
                project.featured ? 'md:col-span-1' : ''
              }`}
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20" />
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  {project.videoUrl && (
                    <Button
                      variant="hero"
                      size="icon"
                      onClick={() => setSelectedProject(project)}
                    >
                      <Play className="w-5 h-5" />
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button variant="outline" size="icon" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-5 h-5" />
                      </a>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button variant="neon" size="icon" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </Button>
                  )}
                </div>

                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-display">
                    Featured
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="font-display font-semibold text-xl group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
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
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-2xl shadow-[inset_0_0_30px_hsl(var(--neon-purple)/0.2)]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/90 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative w-full max-w-4xl glass-card rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/50 text-foreground hover:bg-background transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="aspect-video bg-muted flex items-center justify-center">
              <p className="text-muted-foreground font-body">Video Player Placeholder</p>
            </div>
            <div className="p-6">
              <h3 className="font-display font-semibold text-xl mb-2">{selectedProject.title}</h3>
              <p className="text-muted-foreground font-body">{selectedProject.description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default ProjectsSection;
