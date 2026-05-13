const HeroVisual = () => {
  return (
    <div className="relative w-full max-w-md aspect-square animate-float">
      {/* Outer glow ring */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-3xl" />
      
      {/* Main sphere */}
      <div className="absolute inset-8 rounded-full bg-gradient-to-br from-primary/30 via-transparent to-secondary/30 border border-primary/30 animate-glow">
        {/* Inner grid pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-30"
          viewBox="0 0 200 200"
        >
          {/* Horizontal lines */}
          {[...Array(10)].map((_, i) => (
            <line
              key={`h-${i}`}
              x1="0"
              y1={20 + i * 18}
              x2="200"
              y2={20 + i * 18}
              stroke="hsl(168 100% 50%)"
              strokeWidth="0.5"
              strokeOpacity="0.3"
            />
          ))}
          {/* Vertical lines */}
          {[...Array(10)].map((_, i) => (
            <line
              key={`v-${i}`}
              x1={20 + i * 18}
              y1="0"
              x2={20 + i * 18}
              y2="200"
              stroke="hsl(168 100% 50%)"
              strokeWidth="0.5"
              strokeOpacity="0.3"
            />
          ))}
          {/* Center circle */}
          <circle
            cx="100"
            cy="100"
            r="40"
            fill="none"
            stroke="hsl(168 100% 50%)"
            strokeWidth="1"
            strokeOpacity="0.5"
          />
          <circle
            cx="100"
            cy="100"
            r="60"
            fill="none"
            stroke="hsl(180 100% 50%)"
            strokeWidth="0.5"
            strokeOpacity="0.3"
          />
          <circle
            cx="100"
            cy="100"
            r="80"
            fill="none"
            stroke="hsl(160 100% 45%)"
            strokeWidth="0.5"
            strokeOpacity="0.2"
          />
        </svg>
        
        {/* Central core */}
        <div className="absolute inset-1/4 rounded-full bg-gradient-to-br from-primary/50 to-secondary/50 blur-xl animate-pulse-glow" />
        
        {/* Code-like floating elements */}
        <div className="absolute top-1/4 left-1/4 text-primary/60 font-mono text-xs animate-pulse">
          {"<AI/>"}
        </div>
        <div className="absolute bottom-1/3 right-1/4 text-secondary/60 font-mono text-xs animate-pulse" style={{ animationDelay: "0.5s" }}>
          {"{ }"}
        </div>
        <div className="absolute top-1/2 right-1/5 text-accent/60 font-mono text-xs animate-pulse" style={{ animationDelay: "1s" }}>
          {"=>"}
        </div>
      </div>
      
      {/* Orbiting dots */}
      <div className="absolute inset-0 animate-spin" style={{ animationDuration: "20s" }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_hsl(168_100%_50%)]" />
      </div>
      <div className="absolute inset-0 animate-spin" style={{ animationDuration: "15s", animationDirection: "reverse" }}>
        <div className="absolute bottom-4 right-1/4 w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_0_8px_hsl(180_100%_50%)]" />
      </div>
      <div className="absolute inset-0 animate-spin" style={{ animationDuration: "25s" }}>
        <div className="absolute top-1/4 right-0 w-1 h-1 rounded-full bg-accent shadow-[0_0_6px_hsl(160_100%_45%)]" />
      </div>
    </div>
  );
};

export default HeroVisual;
