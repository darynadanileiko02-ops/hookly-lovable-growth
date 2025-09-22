import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{background: 'var(--gradient-primary)'}}>
              <span className="text-white font-bold text-xl">🪝</span>
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-300 rounded-full animate-pulse"></div>
          </div>
          <span className="text-2xl font-bold text-brand-orange">Hookly</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="/" className="text-foreground font-medium hover:text-brand-orange transition-colors">
            Home
          </a>
          <a href="/about" className="text-muted-foreground font-medium hover:text-brand-orange transition-colors">
            About Us
          </a>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button className="btn-hero">
            Sign Up 🚀
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-brand-orange"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg md:hidden">
            <nav className="flex flex-col p-4 gap-4">
              <a
                href="/"
                className="text-foreground font-medium hover:text-brand-orange transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="/about"
                className="text-muted-foreground font-medium hover:text-brand-orange transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </a>
              <Button className="btn-hero mt-2">Sign Up 🚀</Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;