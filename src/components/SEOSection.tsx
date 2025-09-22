const SEOSection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-bold text-foreground mb-8">
            Fuel Your Social Media Growth with Hookly AI 🚀
          </h2>
          
          <div className="text-lg text-muted-foreground leading-relaxed space-y-6 bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-100">
            <p>
              Hookly is the minimalist AI platform that analyzes competitors, extracts viral hooks, and delivers ready-to-use content ideas. Say goodbye to manual research; our tool scans accounts across Instagram, TikTok, and more to provide actionable insights for maximum engagement.
            </p>
            
            <p>
              Registration is quick, and you can buy online for just $199 to unlock full features like daily growth recommendations and format libraries. With a clean, vibrant interface inspired by Lovable design – featuring gradient layouts and playful icons – Hookly makes virality effortless.
            </p>
            
            <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
              Tailored for Young Creators 🎯
            </h3>
            
            <p>
              Perfect for creators aged 18-35 who want AI content ideas, competitor analysis, and viral hooks without the burnout. Our social media growth platform combines data-driven insights with an intuitive, colorful design that makes content strategy fun and effective.
            </p>
            
            <p>
              Join creators optimizing their content strategy and watch your reach soar. Keywords: AI content ideas, competitor analysis, viral hooks, social media growth, minimalist AI platform, registration, buy online.
            </p>
          </div>
          
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="btn-hero px-8 py-4 text-lg font-semibold"
              onClick={() => window.location.href = '/signup'}
            >
              Join Waitlist 🚀
            </button>
            <button 
              className="bg-white border-2 border-brand-purple text-brand-purple px-8 py-4 rounded-xl font-semibold text-lg hover:bg-brand-purple hover:text-white transition-all duration-300"
              onClick={() => window.location.href = '/about'}
            >
              See Demo ▶️
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOSection;