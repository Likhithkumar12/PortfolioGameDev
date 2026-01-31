import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Briefcase, Gamepad2, Trophy } from 'lucide-react';

interface TimelineItem {
  id: number;
  type: 'work' | 'award' | 'jam' | 'milestone';
  title: string;
  company?: string;
  date: string;
  description: string;
  highlights?: string[];
}

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const timeline: TimelineItem[] = [
    {
      id: 1,
      type: 'work',
      title: 'Senior Game Developer',
      company: 'Pixel Studios',
      date: '2022 - Present',
      description: 'Leading gameplay systems development for mobile and PC titles.',
      highlights: ['Led team of 5 developers', 'Shipped 3 titles', 'Improved performance by 40%'],
    },
    {
      id: 2,
      type: 'award',
      title: 'Best Indie Game',
      company: 'Game Awards 2023',
      date: '2023',
      description: 'Won Best Indie Game for "Cosmic Raider" at regional game awards.',
    },
    {
      id: 3,
      type: 'work',
      title: 'Game Developer',
      company: 'Nova Interactive',
      date: '2020 - 2022',
      description: 'Developed core gameplay mechanics and UI systems for mobile games.',
      highlights: ['Built player controller system', 'Integrated analytics', 'Optimized for low-end devices'],
    },
    {
      id: 4,
      type: 'jam',
      title: 'Global Game Jam Winner',
      date: '2021',
      description: 'Created "Neon Runner" in 48 hours, winning first place in the local jam.',
    },
    {
      id: 5,
      type: 'work',
      title: 'Junior Developer',
      company: 'GameCraft Studios',
      date: '2019 - 2020',
      description: 'Started my professional journey working on casual mobile games.',
      highlights: ['Unity fundamentals', 'Version control', 'Agile methodology'],
    },
    {
      id: 6,
      type: 'milestone',
      title: 'First Published Game',
      date: '2018',
      description: 'Published my first solo game "Puzzle Dimensions" on Google Play with 100K+ downloads.',
    },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'work': return Briefcase;
      case 'award': return Trophy;
      case 'jam': return Gamepad2;
      case 'milestone': return Award;
      default: return Briefcase;
    }
  };

  const getColorClasses = (type: string) => {
    switch (type) {
      case 'work': return { bg: 'bg-primary/20', text: 'text-primary', border: 'border-primary/50' };
      case 'award': return { bg: 'bg-yellow-500/20', text: 'text-yellow-500', border: 'border-yellow-500/50' };
      case 'jam': return { bg: 'bg-secondary/20', text: 'text-secondary', border: 'border-secondary/50' };
      case 'milestone': return { bg: 'bg-accent/20', text: 'text-accent', border: 'border-accent/50' };
      default: return { bg: 'bg-primary/20', text: 'text-primary', border: 'border-primary/50' };
    }
  };

  return (
    <section id="experience" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-secondary/5 rounded-full blur-3xl" />

      <div className="section-container relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-12 h-0.5 bg-gradient-to-r from-transparent to-accent" />
            <span className="font-display text-sm uppercase tracking-widest text-accent">Journey</span>
            <span className="w-12 h-0.5 bg-gradient-to-l from-transparent to-accent" />
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
            Experience &
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary"> Achievements</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            A timeline of my professional journey and milestones
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent transform md:-translate-x-1/2" />

          {timeline.map((item, index) => {
            const Icon = getIcon(item.type);
            const colors = getColorClasses(item.type);
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative flex items-center mb-12 ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-12' : 'md:pl-12'} pl-12 md:pl-0`}>
                  <div className={`p-6 rounded-2xl glass-card border ${colors.border} hover:shadow-lg transition-all duration-300`}>
                    {/* Type Badge */}
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${colors.bg} mb-4`}>
                      <Icon className={`w-4 h-4 ${colors.text}`} />
                      <span className={`font-display text-xs uppercase tracking-wider ${colors.text}`}>
                        {item.type}
                      </span>
                    </div>

                    {/* Title & Company */}
                    <h3 className="font-display font-semibold text-lg mb-1">{item.title}</h3>
                    {item.company && (
                      <p className={`font-body text-sm ${colors.text} mb-2`}>{item.company}</p>
                    )}
                    <p className="font-body text-xs text-muted-foreground mb-3">{item.date}</p>

                    {/* Description */}
                    <p className="font-body text-muted-foreground text-sm mb-4">{item.description}</p>

                    {/* Highlights */}
                    {item.highlights && (
                      <div className="flex flex-wrap gap-2">
                        {item.highlights.map((highlight, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 rounded text-xs font-body bg-muted text-muted-foreground"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-10 h-10 rounded-full bg-background border-2 border-border flex items-center justify-center z-10">
                  <div className={`w-6 h-6 rounded-full ${colors.bg} flex items-center justify-center`}>
                    <Icon className={`w-3 h-3 ${colors.text}`} />
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block w-1/2" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
