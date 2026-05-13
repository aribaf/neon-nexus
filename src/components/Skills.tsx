import { 
  Brain, 
  Database,
  Code2,
  Settings,
} from "lucide-react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "AI & Machine Learning",
    icon: Brain,
    color: "text-primary",
    skills: [
      "Python", "FinBERT", "RoBERTa", "Transformers", "TensorFlow", 
      "Scikit-learn", "Pandas", "NumPy", "NLP Pipelines", "Anomaly Detection"
    ],
  },
  {
    title: "Backend Engineering",
    icon: Database,
    color: "text-secondary",
    skills: [
      "FastAPI", "Node.js", "Express.js", "PostgreSQL", "MySQL", 
      "MongoDB", "REST APIs", "WebSockets", "JWT Auth", "System Design"
    ],
  },
  {
    title: "Frontend Development",
    icon: Code2,
    color: "text-accent",
    skills: [
      "React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5/CSS3", 
      "Framer Motion", "Responsive UI", "State Management", "Vite"
    ],
  },
  {
    title: "Tools & Cloud",
    icon: Settings,
    color: "text-primary",
    skills: [
      "AWS (EC2)", "Linux CLI", "Git/GitHub", "Docker", "Vercel", 
      "Render", "Postman", "Agile/SCRUM", "CI/CD", "Web Scraping"
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-mono text-sm mb-2"
          >
            {"// Core Competencies"}
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="section-title"
          >
            Technical <span className="gradient-text">Toolkit</span>
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 flex flex-col hover:border-primary/30 transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2 rounded-lg bg-muted/50 ${category.color}`}>
                  <category.icon size={20} />
                </div>
                <h3 className="text-lg font-display font-bold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {category.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-2 py-1 text-[10px] font-mono bg-muted/30 border border-border/50 rounded text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
