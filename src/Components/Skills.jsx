import { FaPython, FaReact, FaDatabase, FaCloud, FaRobot } from "react-icons/fa";

const Skills = () => {
  const skills = [
    { name: "Python", icon: <FaPython className="text-yellow-400 text-5xl animate-bounce" /> },
    { name: "React.js", icon: <FaReact className="text-blue-400 text-5xl animate-spin-slow" /> },
    { name: "SQL", icon: <FaDatabase className="text-gray-600 text-5xl animate-pulse" /> },
    { name: "Cloud Computing", icon: <FaCloud className="text-blue-300 text-5xl animate-wiggle" /> },
    { name: "AI & ML", icon: <FaRobot className="text-green-400 text-5xl animate-bounce" /> },
  ];

  return (
    <section id="skills" className="p-10 bg-white text-gray-900 relative">
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-200 to-purple-200 opacity-20"></div>
      <h2 className="text-3xl font-bold text-center">Skills</h2>
      <div className="flex flex-wrap justify-center gap-6 mt-6 z-10">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            {skill.icon}
            <span className="mt-2 text-lg font-semibold">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;