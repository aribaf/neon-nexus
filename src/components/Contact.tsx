import { Mail, Github, Linkedin, Phone, ArrowUpRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10 animate-fade-in" style={{ animationDelay: "0.1s", animationFillMode: "both" }}>
            <p className="text-primary font-mono text-sm mb-2">{"// Get In Touch"}</p>
            <h2 className="section-title">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-muted-foreground mt-4">
              Interested in collaborating or have a project in mind? Feel free to reach out.
            </p>
          </div>

          <div
            className="glass-card neon-border p-8 animate-glow animate-fade-in"
            style={{ animationDelay: "0.2s", animationFillMode: "both" }}
          >
            {/* Contact Details */}
            <div className="space-y-4 mb-8">
              {/* Email */}
              <a
                href="mailto:aribafaryad@gmail.com"
                className="flex items-center gap-4 p-3 rounded-lg bg-muted/20 hover:bg-muted/40 border border-transparent hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="p-2.5 rounded-full bg-primary/10 text-primary group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(0,255,200,0.3)] transition-all">
                  <Mail size={20} />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="text-sm text-primary group-hover:text-primary-light transition-colors">
                    aribafaryad@gmail.com
                  </p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/ariba-f-944391238/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-3 rounded-lg bg-muted/20 hover:bg-muted/40 border border-transparent hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="p-2.5 rounded-full bg-primary/10 text-primary group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(0,255,200,0.3)] transition-all">
                  <Linkedin size={20} />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground">LinkedIn</p>
                  <p className="text-sm text-primary group-hover:text-primary-light transition-colors">
                    linkedin.com/in/ariba-f
                  </p>
                </div>
              </a>

              {/* Phone / WhatsApp */}
              <a
                href="https://wa.me/923254499176"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-3 rounded-lg bg-muted/20 hover:bg-muted/40 border border-transparent hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="p-2.5 rounded-full bg-primary/10 text-primary group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(0,255,200,0.3)] transition-all">
                  <Phone size={20} />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground">Phone / WhatsApp</p>
                  <p className="text-sm text-primary group-hover:text-primary-light transition-colors">
                    0325-4499176
                  </p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/aribaf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-3 rounded-lg bg-muted/20 hover:bg-muted/40 border border-transparent hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="p-2.5 rounded-full bg-primary/10 text-primary group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(0,255,200,0.3)] transition-all">
                  <Github size={20} />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground">GitHub</p>
                  <p className="text-sm text-primary group-hover:text-primary-light transition-colors">
                    github.com/aribaf
                  </p>
                </div>
              </a>
            </div>

            <div className="text-center">
              <a
                href="mailto:aribafaryad@gmail.com"
                className="btn-neon inline-flex items-center gap-2"
              >
                Send a Message
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
