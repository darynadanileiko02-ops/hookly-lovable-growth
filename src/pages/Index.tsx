import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import SEOSection from "@/components/SEOSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <BenefitsSection />
        <TestimonialsSection />
        <ProblemSolutionSection />
        <SEOSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;