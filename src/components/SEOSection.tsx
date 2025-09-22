const SEOSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-bold text-foreground mb-8">
            Grow Your Instagram Presence with Hookly's Minimalist AI
          </h2>
          
          <div className="prose prose-lg mx-auto text-muted-foreground leading-relaxed">
            <p className="mb-6">
              For Instagram users aged 18–35, Hookly offers a minimalist site built in Lovable design – clean, intuitive, and visually appealing. Say goodbye to endless scrolling for ideas; our AI platform analyzes competitors, extracts viral hooks, and provides ready-to-use content optimized for your audience.
            </p>
            
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Tailored for Young Creators
            </h3>
            
            <p className="mb-6">
              Whether you're a solo creator or SMM manager, registration is quick and seamless. Buy online for just $199 to unlock full features like daily insights and format libraries. With a Lovable-inspired interface featuring airy layouts and modern fonts, Hookly makes growth fun and effortless.
            </p>
            
            <p className="mb-8">
              Join thousands optimizing their feeds – sign up today and watch your engagement soar. Our minimalist design philosophy ensures you can focus on what matters most: creating viral content ideas that resonate with your audience.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <button 
              className="btn-hero inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-md"
              onClick={() => window.location.href = '/purchase'}
            >
              Buy for $199
            </button>
            <button 
              className="btn-secondary inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-md"
              onClick={() => window.location.href = '/signup'}
            >
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOSection;