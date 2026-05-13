import { motion } from "framer-motion";
import { User, Cpu, Shield, Globe, Zap } from "lucide-react";

const About = () => {
  const focusAreas = [
    {
      icon: <Shield size={20} />,
      title: "Backend Systems",
      description: "Designing scalable APIs, real-time services, authentication systems, and distributed workflows.",
    },
    {
      icon: <Zap size={20} />,
      title: "Full-Stack Applications",
      description: "Building modern production-style web applications using React, Node.js, FastAPI, and TypeScript.",
    },
    {
      icon: <Cpu size={20} />,
      title: "AI-Powered Products",
      description: "Integrating NLP models, automation workflows, and intelligent systems into real-world applications.",
    },
    {
      icon: <Globe size={20} />,
      title: "Cloud & Infrastructure",
      description: "Deploying and managing applications using AWS, Docker, Linux, and modern deployment platforms.",
    },
  ];

  return (
    <section id="about-me" className="py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-2 mb-4 text-primary font-mono text-sm">
            <User size={16} />
            <span>{"// Who I Am"}</span>
          </div>
          
          <h2 className="section-title mb-8">
            Engineering Solutions at the <span className="gradient-text">Intersection of AI & Web</span>
          </h2>
          
          <div className="grid md:grid-cols-5 gap-12 items-start">
            <div className="md:col-span-3 space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed">
                Software Engineer with experience building scalable full-stack applications, backend services, 
                automation systems, and AI-powered products using Python, Node.js, React, and cloud technologies.
              </p>
              
              <p className="text-muted-foreground text-lg leading-relaxed">
                Focused on backend architecture, real-time workflows, API integration, and building 
                maintainable systems designed for performance and scalability.
              </p>

              <div className="pt-4 flex flex-wrap gap-4">
                <div className="flex flex-col">
                  <span className="text-primary font-bold text-2xl">Graduate</span>
                  <span className="text-xs text-muted-foreground uppercase tracking-widest">Education</span>
                </div>
                <div className="w-px h-12 bg-border hidden sm:block" />
                <div className="flex flex-col">
                  <span className="text-primary font-bold text-2xl">10+</span>
                  <span className="text-xs text-muted-foreground uppercase tracking-widest">Projects Completed</span>
                </div>
                <div className="w-px h-12 bg-border hidden sm:block" />
                <div className="flex flex-col">
                  <span className="text-primary font-bold text-2xl">Open to</span>
                  <span className="text-xs text-muted-foreground uppercase tracking-widest">Global Opportunities</span>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-2 grid gap-4">
              {focusAreas.map((area, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="p-4 glass-card border-primary/10 hover:border-primary/30 transition-colors group"
                >
                  <div className="flex items-start gap-3">
                    <div className="text-primary bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                      {area.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-1">{area.title}</h4>
                      <p className="text-xs text-muted-foreground leading-tight">{area.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
