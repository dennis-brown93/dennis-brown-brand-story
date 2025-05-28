
const About = () => {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-5xl md:text-6xl font-light mb-12 text-black">
            About Me
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-gray-700">
            <p>
              Dennis-Brown is a Lagos-based brand design specialist driven by storytelling and simplicity. 
              With a deep passion for building brands that resonate emotionally and visually, Dennis blends 
              strategy with creativity to deliver elegant design solutions.
            </p>
            <p>
              His work is rooted in clarity, cultural relevance, and bold aesthetics that speak to both 
              local and global audiences.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-80 h-80 bg-gray-100 rounded-full flex items-center justify-center">
            <span className="text-6xl font-light text-gray-400">DB</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export { About };
