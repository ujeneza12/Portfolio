const projects = [
  {
    title: "TVET Management Portal",
    description:
      "A national portal used to manage TVET institutions, trainees, and administrative processes under the Rwanda TVET Board (RTB).",
    tech: "React, Tailwind CSS, REST APIs",
    link: "https://tvetmanagement.rtb.gov.rw/",
  },
  {
    title: "RCA – Rwanda Community Abroad",
    description:
      "A digital platform serving Rwandans living abroad, including consular card management and user profile services.",
    tech: "Next.js, Tailwind CSS, NestJS",
    link: "https://www.rwandancommunityabroad.gov.rw/",
  },
  {
    title: "Taskose",
    description:
      "A team-based task and project management application with role assignment, deadlines, and progress tracking.",
    tech: "React Native, Expo, Tailwind CSS",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-indigo-400">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-indigo-400 transition"
          >
            <h3 className="text-xl font-semibold">{project.title}</h3>

            <p className="text-gray-400 mt-3">
              {project.description}
            </p>

            <p className="text-sm text-indigo-400 mt-3">
              {project.tech}
            </p>

            {project.link !== "#" && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-sm text-indigo-400 hover:underline"
              >
                Visit system →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
