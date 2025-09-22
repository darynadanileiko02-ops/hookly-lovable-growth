import { Instagram, Music } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left - Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold text-white mb-4">Contact Us</h4>
            <p className="text-slate-300 mb-2">
              <a href="mailto:support@hookly.com" className="hover:text-white transition-colors">
                support@hookly.com
              </a>
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="https://instagram.com/hooklyai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white transition-colors"
                aria-label="Follow Hookly on Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://tiktok.com/@hookly"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white transition-colors"
                aria-label="Follow Hookly on TikTok"
              >
                <Music size={24} />
              </a>
            </div>
          </div>

          {/* Center - Copyright */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-6 h-6 bg-gradient-to-br from-brand-primary to-brand-purple rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-sm">H</span>
              </div>
              <span className="text-xl font-bold text-white">Hookly</span>
            </div>
            <p className="text-slate-400 text-sm">
              © Hookly, 2025. All rights reserved.
            </p>
          </div>

          {/* Right - Legal Links */}
          <div className="text-center md:text-right">
            <div className="flex flex-col gap-2">
              <a
                href="/privacy"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;