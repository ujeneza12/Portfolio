const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center text-center">
      <div>
        <h1 className="text-4xl md:text-6xl font-bold">
          Hi, I’m <span className="text-indigo-400">Ujeneza Divine</span>
        </h1>
        <p className="mt-4 text-gray-400 text-lg">
          Frontend Developer | React • Next.js • Tailwind CSS
        </p>
        <div className="mt-6 space-x-4">
          <a
            href="#projects"
            className="bg-indigo-500 px-6 py-3 rounded-lg hover:bg-indigo-600"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-indigo-500 px-6 py-3 rounded-lg hover:bg-indigo-500"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
