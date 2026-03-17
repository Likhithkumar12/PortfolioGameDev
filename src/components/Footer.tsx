import { Gamepad2 } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/50 relative overflow-hidden">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              <Gamepad2 className="w-6 h-6 text-primary transition-all duration-300 group-hover:text-secondary" />
            </div>
            <span className="font-display font-bold text-lg tracking-wider">
              <span className="text-foreground">LIKHITH</span>
              <span className="text-primary">DEV</span>
            </span>
          </a>

          {/* Copyright */}
          <p className="font-body text-sm text-muted-foreground text-center">
            © {currentYear} All rights reserved. Designed & Developed with{' '}
            <span className="text-primary">♥</span> by{' '}
            <span className="font-display text-foreground">Your Name</span>
          </p>

          {/* Back to top */}
          <a
            href="#"
            className="font-display text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            Back to Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
