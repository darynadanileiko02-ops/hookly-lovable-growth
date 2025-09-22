import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-bold text-foreground mb-8">
                About Hookly
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                We're building the future of AI-powered content creation for social media. 
                Our mission is to help creators and SMM managers grow their presence without burnout.
              </p>
              <div className="prose prose-lg mx-auto text-muted-foreground leading-relaxed">
                <p className="mb-6">
                  Founded by creators for creators, Hookly understands the challenges of maintaining 
                  a consistent social media presence while creating engaging, viral content. Our AI 
                  platform analyzes successful competitors, extracts winning formulas, and delivers 
                  personalized content strategies.
                </p>
                <p>
                  Join thousands of content creators aged 18-35 who trust Hookly to streamline their 
                  creative process and boost their Instagram engagement.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;