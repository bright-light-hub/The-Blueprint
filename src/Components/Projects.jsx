const Projects = () => {
    const projectList = [
      { title: "Retail Sales Analysis", desc: "Data analysis using Python & Pandas", link: "#" },
      { title: "Inventory Management System", desc: "Full-Stack app using React & Django", link: "#" },
      { title: "AI Chatbot", desc: "NLP-based chatbot using Python", link: "#" },
    ];
  
    return (
      <section id="projects" className="p-10 bg-gray-100">
        <h2 className="text-3xl font-bold text-center">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {projectList.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-600">{project.desc}</p>
              <a href={project.link} className="text-blue-500 hover:underline mt-2 block">View Project</a>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Projects;