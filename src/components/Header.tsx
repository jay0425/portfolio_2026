import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

type HeaderProps = {
  onNavigate: (index: number, href?: string) => void;
};

const Header = ({ onNavigate }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { label: "Intro", href: "#intro", index: 0 },
    { label: "Skills", href: "#skills", index: 1 },
    { label: "Experience", href: "#experience", index: 2 },
    { label: "Portfolio", href: "#portfolio", index: 3 },
    { label: "About Me", href: "#about", index: 4 },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, index: number, href: string) => {
    e.preventDefault(); // ✅ 앵커 점프(스크롤) 방지
    setMobileMenuOpen(false);

    // ✅ Swiper로 이동
    onNavigate(index, href);

    // (선택) URL 해시는 남기고 싶으면:
    window.history.replaceState(null, "", href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen ? "bg-background/95 backdrop-blur-lg border-b border-border" : ""
      }`}
    >
      <div className="w-full px-10 sm:px-6 py-4 flex items-center justify-between">
        <a
          href="/"
          className="text-xl sm:text-2xl font-bold font-mono tracking-tight text-gradient hover:opacity-80 transition-opacity"
        >
          JAEHEE
        </a>

        {/* 데스크탑 */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.index, item.href)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* 모바일 */}
        <button
          className="md:hidden text-foreground p-2 -mr-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

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
              onClick={(e) => handleNavClick(e, item.index, item.href)}
              className="py-3 px-4 text-base font-medium text-muted-foreground hover:text-primary hover:bg-secondary/50 rounded-lg transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
