import { ExternalLink, Github, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
  featured?: boolean;
  index: number;
  images?: string[];
  onCardClick?: () => void;
}

const ProjectCard = ({
  title,
  subtitle,
  description,
  tech,
  github,
  live,
  index,
  images,
  onCardClick,
}: ProjectCardProps) => {
  const handleCardClick = (e: React.MouseEvent) => {
    // Prevent modal from opening when clicking links
    if ((e.target as HTMLElement).closest('a')) return;
    onCardClick?.();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      onClick={handleCardClick}
      className="group relative flex flex-col h-full bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-500 cursor-pointer"
    >
      {/* Glow Effect on Hover */}
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {/* Header Visual */}
      <div className="relative h-48 overflow-hidden bg-muted/20">
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10" />
        
        {images && images.length > 0 ? (
          <img 
            src={images[0]} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-primary/10 font-display text-4xl select-none group-hover:scale-110 transition-transform duration-700">
            {title.split(' ').map(w => w[0]).join('')}
          </div>
        )}
        
        {/* Hover Action Badge */}
        <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="px-3 py-1 rounded-full bg-primary/20 border border-primary/50 text-primary text-[10px] font-mono flex items-center gap-1 uppercase tracking-wider">
            View Details <ChevronRight size={12} />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-6 relative z-20">
        <div className="mb-4">
          <p className="text-primary/70 font-mono text-[10px] uppercase tracking-[0.2em] mb-1">
            {subtitle}
          </p>
          <h3 className="text-xl font-display font-bold group-hover:text-primary transition-colors">
            {title}
          </h3>
        </div>

        <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-grow leading-relaxed">
          {description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {tech.slice(0, 4).map((item) => (
            <span
              key={item}
              className="px-2 py-0.5 text-[9px] font-mono bg-muted/50 border border-border rounded text-muted-foreground group-hover:border-primary/30 group-hover:text-foreground transition-colors"
            >
              {item}
            </span>
          ))}
          {tech.length > 4 && (
            <span className="px-2 py-0.5 text-[9px] font-mono bg-muted/50 border border-border rounded text-muted-foreground">
              +{tech.length - 4}
            </span>
          )}
        </div>

        {/* Action Links */}
        <div className="flex items-center gap-4 mt-auto">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors font-medium"
          >
            <Github size={14} />
            Code
          </a>
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
