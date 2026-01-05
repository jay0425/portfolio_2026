const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <a href="/" className="text-xl font-bold font-mono text-gradient">
            JAEHEE
          </a>

          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} JAEHEE. All rights reserved.
          </p>

          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href="#intro"
              className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Intro
            </a>
            <a
              href="#skills"
              className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Skills
            </a>
            <a
              href="#portfolio"
              className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Portfolio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
