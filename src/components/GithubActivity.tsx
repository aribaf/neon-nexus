import { motion } from "framer-motion";
import { Github, Activity, Star, GitFork } from "lucide-react";

const GithubActivity = () => {
  const username = "aribaf";
  const theme = "tokyonight"; // Closest to our aesthetic

  return (
    <section id="github" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center justify-center gap-2 text-primary font-mono text-sm mb-2"
          >
            <Github size={16} />
            <span>{"// Open Source Contributions"}</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="section-title"
          >
            GitHub <span className="gradient-text">Activity</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-2 overflow-hidden flex justify-center items-center"
          >
            <img 
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=${theme}&bg_color=0D1117&title_color=00FFC8&icon_color=00FFC8&text_color=E6EDF3&border_color=30363D&hide_border=true`} 
              alt="GitHub Stats" 
              className="w-full h-auto"
            />
          </motion.div>

          {/* Top Languages Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-2 overflow-hidden flex justify-center items-center"
          >
            <img 
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=${theme}&bg_color=0D1117&title_color=00FFC8&text_color=E6EDF3&border_color=30363D&hide_border=true`} 
              alt="Top Languages" 
              className="w-full h-auto"
            />
          </motion.div>

          {/* Streak Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 glass-card p-2 overflow-hidden flex justify-center items-center"
          >
            <img 
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=${theme}&background=0D1117&fire=00FFC8&ring=00FFC8&sideNums=00FFC8&sideLabels=E6EDF3&dates=E6EDF3&currStreakLabel=00FFC8&currStreakNum=00FFC8&stroke=30363D&hide_border=true`} 
              alt="GitHub Streak" 
              className="w-full h-auto"
            />
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a 
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-neon inline-flex items-center gap-2"
          >
            Follow on GitHub
            <Activity size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default GithubActivity;
