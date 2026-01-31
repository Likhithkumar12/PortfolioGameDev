import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Github, Linkedin, Mail, Send, Youtube, Gamepad } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from '@/hooks/use-toast';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: '#', color: 'hover:text-foreground' },
    { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'hover:text-accent' },
    { name: 'YouTube', icon: Youtube, href: '#', color: 'hover:text-destructive' },
    { name: 'Itch.io', icon: Gamepad, href: '#', color: 'hover:text-primary' },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

      <div className="section-container relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Section Label */}
            <div className="inline-flex items-center gap-2">
              <span className="w-12 h-0.5 bg-gradient-to-r from-primary to-transparent" />
              <span className="font-display text-sm uppercase tracking-widest text-primary">Contact</span>
            </div>

            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl">
              Let's Build
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Something Amazing
              </span>
            </h2>

            <p className="text-muted-foreground font-body text-lg leading-relaxed">
              Have a game idea you'd like to bring to life? Looking for a skilled developer to join your team? 
              I'm always excited to discuss new projects and opportunities.
            </p>

            {/* Email */}
            <div className="flex items-center gap-4 p-4 rounded-xl glass-card border border-border/50">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="font-display text-sm text-muted-foreground">Email me at</p>
                <a href="mailto:hello@gamedev.com" className="font-body text-lg hover:text-primary transition-colors">
                  hello@gamedev.com
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <p className="font-display text-sm uppercase tracking-widest text-muted-foreground">
                Find me on
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-xl glass-card border border-border/50 text-muted-foreground ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="p-8 rounded-2xl glass-card border border-border/50 space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="font-display text-sm uppercase tracking-wider text-muted-foreground">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                  className="bg-muted/50 border-border/50 focus:border-primary h-12 font-body"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="font-display text-sm uppercase tracking-wider text-muted-foreground">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="bg-muted/50 border-border/50 focus:border-primary h-12 font-body"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="font-display text-sm uppercase tracking-wider text-muted-foreground">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  required
                  rows={5}
                  className="bg-muted/50 border-border/50 focus:border-primary font-body resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    Send Message
                  </span>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
