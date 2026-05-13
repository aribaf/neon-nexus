import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ExternalLink, Github, Code2, Cpu, Layout, Info } from "lucide-react";
import { Project } from "./Projects";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface ProjectModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  project: Project | null;
}

const ProjectModal = ({ open, onOpenChange, project }: ProjectModalProps) => {
  const [selectedImage, setSelectedImage] = useState(0);

  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl bg-background/95 backdrop-blur-2xl border-primary/20 p-0 overflow-hidden max-h-[90vh] overflow-y-auto scrollbar-thin">
        <div className="relative h-64 sm:h-80 bg-muted/20">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent z-10" />
          
          {project.images && project.images.length > 0 ? (
            <img 
              src={project.images[selectedImage]} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex items-center justify-center h-full text-primary/10 font-display text-7xl select-none">
              {project.title.split(' ').map(w => w[0]).join('')}
            </div>
          )}

          <div className="absolute bottom-6 left-8 z-20 text-left">
            <p className="text-primary font-mono text-xs uppercase tracking-[0.3em] mb-2">{project.subtitle}</p>
            <DialogTitle className="text-3xl sm:text-4xl font-display font-bold text-foreground text-left">{project.title}</DialogTitle>
          </div>
        </div>

        <div className="p-8 space-y-8">
          {/* Image Thumbnails */}
          {project.images && project.images.length > 1 && (
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
              {project.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`relative w-20 h-14 rounded-md overflow-hidden border-2 transition-all flex-shrink-0 ${
                    selectedImage === idx ? "border-primary" : "border-border/50 opacity-50 hover:opacity-100"
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* Action Links */}
          <div className="flex flex-wrap gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon flex items-center gap-2 text-sm"
            >
              <Github size={18} />
              View Source Code
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-neon flex items-center gap-2 text-sm"
              >
                <ExternalLink size={18} />
                Live Preview
              </a>
            )}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              {/* Engineering Case Study Content */}
              <section className="space-y-3">
                <div className="flex items-center gap-2 text-primary">
                  <Info size={18} />
                  <h4 className="font-display text-sm font-bold uppercase tracking-wider">Overview</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {project.description}
                </p>
              </section>

              {project.problem && (
                <section className="space-y-3">
                  <div className="flex items-center gap-2 text-primary">
                    <Cpu size={18} />
                    <h4 className="font-display text-sm font-bold uppercase tracking-wider">The Challenge</h4>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {project.problem}
                  </p>
                </section>
              )}

              {project.solution && (
                <section className="space-y-3">
                  <div className="flex items-center gap-2 text-primary">
                    <Code2 size={18} />
                    <h4 className="font-display text-sm font-bold uppercase tracking-wider">The Engineering Solution</h4>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {project.solution}
                  </p>
                </section>
              )}
            </div>

            <div className="space-y-8">
              {/* Technical Sidebar */}
              {project.architecture && (
                <section className="space-y-3">
                  <div className="flex items-center gap-2 text-primary">
                    <Layout size={18} />
                    <h4 className="font-display text-sm font-bold uppercase tracking-wider">Architecture</h4>
                  </div>
                  <p className="text-[11px] text-muted-foreground leading-relaxed bg-muted/30 p-4 rounded-lg border border-border/50">
                    {project.architecture}
                  </p>
                </section>
              )}

              <section className="space-y-3">
                <h4 className="font-display text-sm font-bold uppercase tracking-wider text-primary">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 text-[10px] font-mono bg-primary/10 text-primary border border-primary/20 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
