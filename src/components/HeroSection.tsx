import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hookly-hero-illustration.png";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left fade-in">
            <h1 className="mb-6 font-bold text-foreground">
              Unlock Viral Growth with Hookly AI
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
              Tired of manual research? Hookly analyzes your competitors on Instagram, extracts winning hooks and formats, and delivers daily content ideas optimized for virality. Perfect for young creators aged 18–35 looking to grow their audience without burnout.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="btn-hero text-lg px-8 py-6"
                onClick={() => window.location.href = '/purchase'}
              >
                Buy for $199
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="btn-secondary text-lg px-8 py-6"
                onClick={() => window.location.href = '/signup'}
              >
                Sign Up
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end fade-in">
            <img
              src={heroImage}
              alt="Hookly AI platform hero illustration showing viral content analysis"
              className="w-full max-w-lg h-auto rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;