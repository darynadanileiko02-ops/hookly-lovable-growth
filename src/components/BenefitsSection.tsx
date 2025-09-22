import { Search, BookOpen, TrendingUp, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: Search,
    title: "Competitor Analysis",
    description: "AI scans up to 20 accounts to reveal top posts, hooks, and engagement metrics. See what works in your niche effortlessly.",
    iconAlt: "Icon for Competitor Analysis"
  },
  {
    icon: BookOpen,
    title: "Hook & Format Library",
    description: "Access a trending database of viral patterns across platforms. Spark ideas and create 10 Reels in minutes.",
    iconAlt: "Icon for Hook and Format Library"
  },
  {
    icon: TrendingUp,
    title: "AI Growth Insights",
    description: "Get personalized recommendations on what, when, and how to post for maximum reach. Optimize your Instagram strategy like a pro.",
    iconAlt: "Icon for AI Growth Insights"
  },
  {
    icon: Clock,
    title: "Save Time & Avoid Burnout",
    description: "Automate research to free up hours weekly. Ideal for busy 18–35 year olds building their personal brand on Instagram.",
    iconAlt: "Icon for Time Saving"
  }
];

const BenefitsSection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-bold text-foreground mb-4">
            Why Choose Hookly?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the powerful features that make Hookly the go-to AI platform for content creators and social media managers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="benefit-card fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-purple to-brand-pink flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent 
                      size={28} 
                      className="text-white" 
                      aria-label={benefit.iconAlt}
                    />
                  </div>
                </div>
                <h3 className="font-semibold text-foreground mb-4 text-center">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Button 
            size="lg" 
            className="btn-hero text-lg px-8 py-6"
            onClick={() => window.location.href = '/signup'}
          >
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;