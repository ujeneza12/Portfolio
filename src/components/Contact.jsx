const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-800 text-center">
      <h2 className="text-3xl font-bold text-indigo-400 mb-4">
        Contact Me
      </h2>

      <p className="text-gray-400 mb-8">
        Feel free to reach out for collaboration, opportunities, or questions.
      </p>

      <div className="space-y-4">
        <p className="text-gray-300">
          📧 Email:{" "}
          <a
            href="mailto:ujenezadivine@gmail.com"
            className="text-indigo-400 hover:underline"
          >
            ujenezadivine@gmail.com
          </a>
        </p>

        <p className="text-gray-300">
          📞 Phone:{" "}
          <a
            href="tel:+250791744389"
            className="text-indigo-400 hover:underline"
          >
            0791 744 389
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
