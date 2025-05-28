
const Philosophy = () => {
  const principles = [
    {
      title: "Strategic Simplicity",
      description: "Every design decision is purposeful and rooted in clear strategic thinking."
    },
    {
      title: "Emotional Visual Storytelling",
      description: "Brands should connect with people on a deeper, more meaningful level."
    },
    {
      title: "Authentic Brand Tone",
      description: "Authenticity creates lasting relationships between brands and their audiences."
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-gray-50">
      <div className="text-center mb-20">
        <h2 className="text-5xl md:text-6xl font-light mb-8 text-black">
          My Approach
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Great design is born from understanding, empathy, and a relentless pursuit of clarity.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-12">
        {principles.map((principle, index) => (
          <div key={index} className="text-center">
            <div className="w-16 h-16 bg-black rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-white font-light text-xl">{index + 1}</span>
            </div>
            <h3 className="text-2xl font-light mb-4 text-black">
              {principle.title}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {principle.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export { Philosophy };
