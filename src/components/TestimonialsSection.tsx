const testimonials = [
  {
    quote: "Hookly helped me go from 10K to 100K followers in 2 months! 🚀",
    name: "Sarah Chen",
    handle: "@contentqueen • 127K followers",
    avatar: "👩‍💼"
  },
  {
    quote: "Finally, an AI tool that actually understands viral content. Game changer! ✨",
    name: "Marcus Rodriguez",
    handle: "@creativemarcos • 85K followers", 
    avatar: "👨‍🎨"
  },
  {
    quote: "I save 15+ hours weekly on research. More time creating, less time scrolling! ⏰",
    name: "Emma Thompson",
    handle: "@emmacreates • 156K followers",
    avatar: "👩‍🎨"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding section-purple">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-bold text-white mb-4">
            What Creators Say 💬
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Real results from real creators who've supercharged their growth with Hookly.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-4">
                <div className="text-4xl mb-4">{testimonial.avatar}</div>
                <p className="text-gray-700 italic mb-4 text-lg">
                  "{testimonial.quote}"
                </p>
              </div>
              
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.handle}</p>
              </div>
              
              {/* Star rating */}
              <div className="star-rating mt-3 text-center">
                ⭐⭐⭐⭐⭐
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bubble-tag mb-4">
            Join 10K+ creators already using Hookly! 🎯
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;