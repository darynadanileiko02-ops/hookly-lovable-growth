import { Search, BookOpen, TrendingUp, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    emoji: "⏰",
    title: "No More Endless Scrolling",
    description: "Stop wasting hours browsing for inspiration. Get curated viral content delivered to you.",
    iconAlt: "Icon for no more scrolling"
  },
  {
    emoji: "📊",
    title: "Data Tells Me What's Hot – I Just Create",
    description: "Focus on creating amazing content while we handle the trend analysis and research.",
    iconAlt: "Icon for data analysis"
  },
  {
    emoji: "⌛",
    title: "10+ Hours Saved Weekly",
    description: "Creators report saving 10-15 hours per week on content research and planning.",
    iconAlt: "Icon for time saving"
  }
];

const BenefitsSection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-bold text-foreground mb-4">
            Why Hookly?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of creators who've transformed their content strategy with AI-powered insights.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="benefit-card fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6 flex justify-center">
                <div className="text-5xl bounce-icon" style={{ animationDelay: `${index * 0.2}s` }}>
                  {benefit.emoji}
                </div>
              </div>
              <h3 className="font-semibold text-foreground mb-4 text-center">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-center leading-relaxed mb-4">
                {benefit.description}
              </p>
              
              {/* 5-star rating */}
              <div className="star-rating text-center">
                ⭐⭐⭐⭐⭐
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Button 
            size="lg" 
            className="btn-hero text-lg px-8 py-6"
            onClick={() => window.location.href = '/signup'}
          >
            Get Started Today ✨
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;