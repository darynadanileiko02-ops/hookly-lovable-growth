const ProblemSolutionSection = () => {
  return (
    <section className="section-padding section-blob relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-200/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-bold text-gray-800 mb-4">
            From Struggle to Growth 📈
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Problem Side */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-orange-200">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">😤</div>
              <h3 className="text-2xl font-bold text-red-600 mb-4">The Problem</h3>
            </div>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                To go viral today, creators and agencies face an impossible demand: They must constantly track what competitors are posting. They must decode which hooks and formats actually drive engagement. And they must generate endless ideas at scale.
              </p>
              
              <p>
                Top influencers publish from 3 videos daily — over 90 pieces of content per month. But researching, analyzing, and ideating is still manual, time-consuming, and unpredictable.
              </p>
              
              <p className="font-semibold text-red-600">
                Result: creators burn out, agencies waste hours on research, and brands lose growth opportunities.
              </p>
            </div>
          </div>

          {/* Solution Side */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-green-200">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">✨</div>
              <h3 className="text-2xl font-bold text-green-600 mb-4">The Solution</h3>
            </div>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg font-semibold text-green-700 mb-4">
                Hookly is the AI partner for content growth.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">🔍</span>
                  <span><strong>Scans competitors</strong> → extracts winning hooks & formats</span>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-blue-500 text-xl">📊</span>
                  <span><strong>Benchmarks metrics</strong> → explains why a post works</span>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-purple-500 text-xl">💡</span>
                  <span><strong>Delivers daily content ideas</strong> optimized for virality</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bubble-tag mb-6">
            Ready to solve your content struggles? 🚀
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="btn-hero px-8 py-4 text-lg font-semibold rounded-xl"
              onClick={() => window.location.href = '/purchase'}
            >
              Buy for $199 💳
            </button>
            <button 
              className="bg-white border-2 border-orange-400 text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
              onClick={() => window.location.href = '/signup'}
            >
              See Demo ▶️
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;