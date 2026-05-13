import { motion } from "framer-motion";
import { BookOpen, ArrowUpRight, Clock, Tag } from "lucide-react";

const posts = [
  {
    title: "Building an NLP Pipeline for News Analysis",
    excerpt: "Exploring the intricacies of tokenization, sentiment analysis, and data normalization in financial markets.",
    date: "May 2024",
    readTime: "8 min read",
    tags: ["NLP", "Python", "Finance"],
    slug: "nlp-pipeline-news-analysis"
  },
  {
    title: "How YOLOv8 Works in Real-Time Detection",
    excerpt: "A deep dive into the architecture of YOLOv8 and how it achieves high accuracy in object detection for surveillance.",
    date: "April 2024",
    readTime: "6 min read",
    tags: ["Computer Vision", "AI", "YOLO"],
    slug: "yolov8-real-time-detection"
  },
  {
    title: "Designing Scalable Full-Stack Systems",
    excerpt: "Best practices for architecting modern web applications that can handle high traffic and complex data flows.",
    date: "March 2024",
    readTime: "10 min read",
    tags: ["Architecture", "System Design", "Web"],
    slug: "scalable-fullstack-systems"
  }
];

const Blog = () => {
  return (
    <section id="writing" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-mono text-sm mb-2"
          >
            {"// Technical Insights"}
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="section-title"
          >
            Technical <span className="gradient-text">Writing</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group glass-card overflow-hidden flex flex-col hover:border-primary/30 transition-all duration-500"
            >
              <div className="h-48 bg-muted/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-50 group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <BookOpen size={48} className="text-primary/20" />
                </div>
                <div className="absolute top-4 left-4 flex gap-2">
                  {post.tags.slice(0, 2).map(tag => (
                    <span key={tag} className="px-2 py-1 bg-background/80 backdrop-blur-md border border-border/50 rounded text-[9px] font-mono uppercase text-primary tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-[10px] text-muted-foreground font-mono mb-3">
                  <div className="flex items-center gap-1">
                    <Clock size={12} />
                    <span>{post.readTime}</span>
                  </div>
                  <span>{post.date}</span>
                </div>

                <h3 className="text-xl font-display font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-grow">
                  {post.excerpt}
                </p>

                <div className="pt-4 border-t border-border/50">
                  <button className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest group/btn">
                    Read Article
                    <ArrowUpRight size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-6">Want to see more of my technical writing?</p>
          <a href="#" className="btn-neon inline-flex items-center gap-2">
            View All Articles
            <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
