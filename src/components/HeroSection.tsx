import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hookly-hero-illustration.png";

const HeroSection = () => {
  return (
    <section className="hero-section relative">
      {/* Organic blob shapes */}
      <div className="blob-shape blob-1"></div>
      <div className="blob-shape blob-2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left fade-in">
            <h1 className="mb-6 font-bold text-white text-5xl lg:text-6xl">
              Your AI Buddy for Viral Hooks ✨
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
              Drop in the accounts you want to track, and Hookly shows you the hooks, formats, and ideas that will go viral next. Grow faster without the burnout.
            </p>
            
            {/* Yellow bubble tag */}
            <div className="mb-8">
              <span className="bubble-tag">
                Find viral content in 60s! ⚡
              </span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="btn-hero text-lg px-8 py-6"
                onClick={() => window.location.href = '/purchase'}
              >
                Buy for $199 💳
              </Button>
              <Button 
                size="lg" 
                className="btn-secondary text-lg px-8 py-6"
                onClick={() => window.location.href = '/signup'}
              >
                Sign Up 🚀
              </Button>
            </div>
          </div>

          {/* Right Illustration with floating icons */}
          <div className="flex justify-center lg:justify-end fade-in-delay relative">
            <div className="relative">
              <img
                src={heroImage}
                alt="Hookly AI viral hooks illustration showing social media growth"
                className="w-full max-w-lg h-auto rounded-2xl"
              />
              
              {/* Floating social icons */}
              <div className="absolute -top-4 -right-4 bounce-icon">
                <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white text-xl">
                  📸
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 float-icon">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white">
                  🎵
                </div>
              </div>
              
              <div className="absolute top-1/3 -right-8 bounce-icon" style={{animationDelay: '0.5s'}}>
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm">
                  ❤️
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;