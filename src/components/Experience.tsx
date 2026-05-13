import { motion } from "framer-motion";
import { Briefcase, Calendar, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Software Engineer",
    company: "Portfolio Development",
    period: "2024 - Present",
    description: "Building production-ready full-stack applications with AI integrations. Focusing on scalability, performance, and modern UI/UX.",
    tech: ["React", "FastAPI", "Node.js", "MongoDB"]
  },
  {
    type: "education",
    title: "B.S. Software Engineering",
    company: "COMSATS University Islamabad, Lahore",
    period: "Feb 2026",
    description: "Specialized in Artificial Intelligence and Web Engineering. Core coursework: Data Structures, OOP, SDLC, AI & ML.",
    tech: ["Data Structures", "Algorithms", "AI", "Software Architecture"]
  },
  {
    type: "project",
    title: "Final Year Project",
    company: "CryptoSent Platform",
    period: "2023 - 2024",
    description: "Researched and implemented a real-time sentiment analysis engine for cryptocurrency markets, achieving high accuracy in trend prediction.",
    tech: ["NLP", "NLTK", "Scikit-learn", "Python"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-muted/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-mono text-sm mb-2"
          >
            {"// Professional Journey"}
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="section-title"
          >
            Career <span className="gradient-text">Timeline</span>
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border/50 -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  idx % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 z-10 hidden md:block" />

                <div className={`md:w-1/2 ${idx % 2 === 0 ? "md:pl-12" : "md:pr-12 text-left md:text-right"}`}>
                  <div className="glass-card p-6 border-primary/10 hover:border-primary/30 transition-all">
                    <div className={`flex items-center gap-2 mb-2 text-primary font-mono text-xs ${idx % 2 === 0 ? "" : "md:justify-end"}`}>
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                    
                    <h3 className="text-xl font-display font-bold mb-1">{exp.title}</h3>
                    <p className="text-primary/80 font-medium mb-4">{exp.company}</p>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    <div className={`flex flex-wrap gap-2 ${idx % 2 === 0 ? "" : "md:justify-end"}`}>
                      {exp.tech.map((t) => (
                        <span key={t} className="px-2 py-0.5 bg-muted/50 border border-border rounded text-[10px] text-muted-foreground">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
