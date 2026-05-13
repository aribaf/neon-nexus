import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { motion } from "framer-motion";

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  problem?: string;
  solution?: string;
  architecture?: string;
  tech: string[];
  github: string;
  live?: string;
  featured?: boolean;
  images?: string[];
}

const featuredProjects: Project[] = [
  {
    title: "CryptoSent",
    subtitle: "AI-Driven Financial Intelligence | Predictive Analytics",
    description:
      "A flagship real-time sentiment analysis and market prediction ecosystem that processes 120K+ records from Twitter, Reddit, and News to forecast cryptocurrency trends.",
    problem: "Solving information asymmetry in volatile crypto markets by aggregating disparate social sentiment and correlating it with technical indicators in real-time.",
    solution: "Engineered a distributed data pipeline with Selenium-based scrapers and automated Reddit monitoring. Implemented a deep learning NLP pipeline using DistilBERT and BiLSTM for high-precision sentiment classification. Forecasted market direction using a hybrid ensemble of XGBoost, TensorFlow, and Prophet models.",
    architecture: "Microservices-based FastAPI backend with asynchronous background workers for data ingestion. Scalable MongoDB schema for time-series sentiment storage. Real-time data streaming via WebSockets and containerized orchestration using Docker Compose.",
    tech: ["FastAPI", "React 19", "MongoDB", "Transformers", "XGBoost", "TensorFlow", "Selenium", "WebSockets", "Docker"],
    github: "https://github.com/aribaf/Cryptocurrency-Sentiment-Analysis-Platform",
    live: "https://cryptocurrency-sentiment-analysis-p-one.vercel.app/",
    featured: true,
    images: ["/projects/cryptosent.png"],
  },
  {
    title: "Tee-Tribe",
    subtitle: "Full-Stack | FinTech | Admin Orchestration",
    description:
      "An enterprise-grade e-commerce ecosystem featuring complex role-based access control, Stripe-powered financial workflows, and a real-time administrative intelligence dashboard.",
    problem: "Developing a scalable shopping platform that maintains strict synchronization between customer transactions, real-time inventory state, and secure administrative oversight.",
    solution: "Engineered a decoupled architecture using FastAPI and React 18. Implemented Supabase for robust authentication and RBAC, integrated end-to-end Stripe payment flows with automated webhook verification, and built a comprehensive Admin CRUD suite for fleet-wide product and order management.",
    architecture: "High-performance backend orchestrated with FastAPI and Pydantic v2, leveraging PostgreSQL for relational integrity and Supabase for session security. Deployed across a distributed Vercel (Frontend) and Render (Backend) environment with asynchronous webhook processing.",
    tech: ["React 18", "FastAPI", "Supabase", "Stripe", "PostgreSQL", "TypeScript", "TailwindCSS"],
    github: "https://github.com/aribaf/tee-tribe",
    live: "https://tee-tribe.vercel.app/",
    featured: true,
    images: ["/projects/teetribe.png"],
  },
  {
    title: "Alarm-Guard",
    subtitle: "AI | Audio Anomaly Detection",
    description:
      "A real-time anomaly detection system using deep learning for environmental audio monitoring and automated alerting.",
    problem: "Manual environmental monitoring for security or industrial safety is inefficient and slow to react to specific auditory anomalies.",
    solution: "Implemented real-time inference pipelines using TensorFlow for deep learning-based audio signal processing and anomaly detection.",
    architecture: "Python-based preprocessing and inference engine integrated with automated alert notification APIs for real-time event response.",
    tech: ["Python", "TensorFlow", "Signal Processing", "APIs"],
    github: "https://github.com/aribaf/Alarm-Guard-Audio-Based-Intrusion-Detection",
    featured: true,
    images: ["/projects/alarmguard.jpg"],
  },
  {
    title: "Code Smell Detector",
    subtitle: "Static Analysis | Developer Tool",
    description:
      "A static analysis tool that identifies maintainability issues and structural code smells in Python applications.",
    problem: "Maintaining code quality in large Python projects is challenging, and manual reviews often miss structural issues like deep nesting.",
    solution: "Built a tool that analyzes Abstract Syntax Trees (AST) to detect code smells and improve overall software quality metrics.",
    architecture: "Uses Python's AST module for structural analysis and Flask for the web-based reporting interface.",
    tech: ["Python", "Flask", "AST"],
    github: "https://github.com/aribaf/code-smell-detection",
    featured: true,
    images: ["/projects/codesmell-report.png"],
  },
];

const otherProjects: Project[] = [
  {
    title: "Jigsaw Online",
    subtitle: "E-Commerce System",
    description: "A full-featured e-commerce system with an advanced admin dashboard and inventory management.",
    tech: ["Node.js", "Express", "EJS", "MongoDB"],
    github: "https://github.com/aribaf/Jigsaw-Online",
    images: ["/projects/jigsaw.png"],
  },
  {
    title: "Diabetes Prediction",
    subtitle: "Machine Learning",
    description: "Predictive model for early diabetes detection using health metrics and Random Forest classifier.",
    tech: ["Python", "Scikit-learn", "Streamlit"],
    github: "https://github.com/aribaf/diabetes-prediction-model",
    images: ["/projects/diabetes.png"],
  },
  {
    title: "Connect VPN",
    subtitle: "Mobile App",
    description: "Lightweight Flutter VPN client with native Java implementation for connection protocols.",
    tech: ["Flutter", "Java", "Android"],
    github: "https://github.com/aribaf/connect-vpn",
    images: ["/projects/connect-vpn.png"],
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-mono text-sm mb-2"
          >
            {"// Engineering Portoflio"}
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="section-title"
          >
            Featured <span className="gradient-text">Case Studies</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              index={index}
              onCardClick={() => handleProjectClick(project)}
            />
          ))}
        </div>

        <div className="text-center mb-12">
          <h3 className="text-2xl font-display font-bold">
            Other <span className="text-primary">Technical Works</span>
          </h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              index={index + 4}
              onCardClick={() => handleProjectClick(project)}
            />
          ))}
        </div>
      </div>

      <ProjectModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        project={selectedProject}
      />
    </section>
  );
};

export default Projects;
