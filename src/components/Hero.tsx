import { ArrowRight, Download, Github, Linkedin, MapPin, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import HeroVisual from "./HeroVisual";

const Hero = () => {
  const exploring = ["LLM-Powered Applications", "AI Automation Workflows", "Distributed Systems", "Scalable Backend Architectures"];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 pb-12 relative overflow-hidden"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-2 text-primary font-mono text-sm tracking-wider"
              >
                <span className="w-8 h-[1px] bg-primary/50" />
                <span>{"Software Engineer"}</span>
              </motion.div>
              
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
                Ariba <span className="gradient-text">Faryad</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-foreground/90 font-medium max-w-xl">
                Software Engineer building <span className="text-primary">scalable backend systems</span>, 
                <span className="text-secondary"> AI-powered applications</span>, and modern web products.
              </p>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-muted-foreground text-sm md:text-base">
              <div className="flex items-center gap-2">
                <Briefcase size={16} className="text-primary/70" />
                <span>Software Engineering (Feb 2026)</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary/70" />
                <span>Lahore, Pakistan</span>
              </div>
            </div>


            <p className="text-muted-foreground text-lg leading-relaxed max-w-lg border-l-2 border-primary/30 pl-6 py-1">
              Focused on backend architecture, automation, and delivering high-performance technical solutions.
            </p>

            {/* Currently Building */}
            <div className="flex items-center gap-3 py-2">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </div>
              <p className="text-xs font-medium text-foreground/80">
                Currently building <span className="text-primary">AI-powered backend systems</span> and <span className="text-secondary">automation workflows</span>.
              </p>
            </div>

            {/* Currently Exploring */}
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground/70 font-bold">
                Currently Exploring
              </p>
              <div className="flex flex-wrap gap-2">
                {exploring.map((item, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 bg-muted/30 border border-border/50 rounded-md text-[10px] font-mono text-primary/80 uppercase"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <motion.a 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#projects" 
                className="btn-neon flex items-center gap-2"
              >
                View Projects
                <ArrowRight size={16} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#"
                className="btn-outline-neon flex items-center gap-2"
              >
                <Download size={16} />
                Resume
              </motion.a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-5 pt-2">
              <a
                href="https://github.com/aribaf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/ariba-f-944391238/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
