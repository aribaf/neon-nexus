import { motion } from "framer-motion";
import { Award, CheckCircle2 } from "lucide-react";

const certifications = [
  {
    title: "Python for Data Science, AI & Development",
    issuer: "IBM (Coursera)",
    icon: <Award className="text-primary" size={24} />,
  },
  {
    title: "HTML, CSS, JavaScript for Web Developers",
    issuer: "Johns Hopkins University",
    icon: <Award className="text-secondary" size={24} />,
  },
  {
    title: "Cloud Computing Basics",
    issuer: "LearnQuest (Coursera)",
    icon: <Award className="text-accent" size={24} />,
  },
];

const Certifications = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-muted/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-mono text-sm mb-2"
          >
            {"// Professional Validation"}
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="section-title"
          >
            Certifications & <span className="gradient-text">Badges</span>
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 flex items-start gap-4 hover:border-primary/40 transition-all group"
            >
              <div className="p-3 rounded-lg bg-muted/50 group-hover:bg-primary/10 transition-colors">
                {cert.icon}
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-sm leading-tight group-hover:text-primary transition-colors">{cert.title}</h3>
                <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                <div className="flex items-center gap-1 text-[10px] text-primary/70 font-mono pt-2">
                  <CheckCircle2 size={12} />
                  <span>VERIFIED</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
