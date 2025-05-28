
const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="text-8xl md:text-9xl font-light tracking-tight text-black mb-6">
          Dennis-Brown
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 font-light tracking-wide">
          Brand Design Specialist | Lagos, Nigeria
        </p>
        <div className="mt-16 w-32 h-32 mx-auto border border-gray-200 rounded-full flex items-center justify-center">
          <span className="text-4xl font-light text-gray-400">DB</span>
        </div>
      </div>
    </section>
  );
};

export { Hero };
