const skills = [
  "React.js",
  "Next.js",
  "React Native",
  "Tailwind CSS",
  "JavaScript",
  "TypeScript",
  "Git & GitHub",
  "Figma",
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-indigo-400">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-gray-900 p-4 rounded-lg text-center"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
