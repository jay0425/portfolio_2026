import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { label: "Intro", href: "#intro" },
    { label: "Skills", href: "#skills" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "About Me", href: "#about" },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen ? "bg-background/95 backdrop-blur-lg border-b border-border" : ""
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <a
          href="/"
          className="text-xl sm:text-2xl font-bold font-mono tracking-tight text-gradient hover:opacity-80 transition-opacity"
        >
          JAEHEE
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#about"
          className="hidden md:inline-flex px-5 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          Contact
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-foreground p-2 -mr-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="container mx-auto px-4 pb-6 flex flex-col gap-2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={handleNavClick}
              className="py-3 px-4 text-base font-medium text-muted-foreground hover:text-primary hover:bg-secondary/50 rounded-lg transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#about"
            onClick={handleNavClick}
            className="mt-2 py-3 px-4 bg-primary text-primary-foreground rounded-lg text-base font-medium text-center hover:bg-primary/90 transition-colors"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
