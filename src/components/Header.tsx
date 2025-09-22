import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-brand-primary to-brand-purple rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">H</span>
          </div>
          <span className="text-2xl font-bold text-brand-primary">Hookly</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="/" className="text-foreground font-medium hover:text-primary transition-colors">
            Home
          </a>
          <a href="/about" className="text-muted-foreground font-medium hover:text-primary transition-colors">
            About Us
          </a>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button className="btn-hero">Sign Up</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background border-b border-border/50 md:hidden">
            <nav className="flex flex-col p-4 gap-4">
              <a
                href="/"
                className="text-foreground font-medium hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="/about"
                className="text-muted-foreground font-medium hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </a>
              <Button className="btn-hero mt-2">Sign Up</Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;