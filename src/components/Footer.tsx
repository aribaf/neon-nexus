import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50 bg-background/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="space-y-4">
            <a href="#" className="font-display font-bold text-xl tracking-tighter">
              A.<span className="text-primary">Faryad</span>
            </a>
            <p className="text-sm text-muted-foreground max-w-xs">
              Software Engineering Graduate specializing in AI systems and modern full-stack development.
            </p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <p className="text-sm font-mono text-muted-foreground uppercase tracking-widest">Connect</p>
            <div className="flex items-center gap-6">
              <a href="https://github.com/aribaf" className="text-muted-foreground hover:text-primary transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/ariba-f-944391238/" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:aribafaryad@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="flex flex-col md:items-end gap-2">
            <p className="text-sm text-muted-foreground">
              Built with <span className="text-primary">React</span>, <span className="text-secondary">Tailwind</span> & <span className="text-accent">Vite</span>
            </p>
            <p className="text-xs text-muted-foreground font-mono">
              © {new Date().getFullYear()} Ariba Faryad. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
