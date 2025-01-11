import React from "react";

const TechCard = () => {
  const techStack = [
    "HTML",
    "CSS",
    "JavaScript",
    "Next.js",
    "GraphQL",
    "Node.js",
    "Python",
    "Django",
    "Blockchain",
    "Go",
    "React Native",
  ];

  return (
    <div className="bg-[#0d1117] p-6 rounded-lg max-w-md mx-auto">
      <div className="flex flex-wrap gap-2">
        {techStack.map((tech, index) => (
          <button
            key={index}
            className="bg-blue-600 text-white py-1 px-3 rounded-full hover:bg-blue-700 transition duration-300"
            onClick={() => alert(`Clicked on ${tech}`)}
          >
            {tech}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TechCard;
