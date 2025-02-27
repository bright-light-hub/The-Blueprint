const Certificates = () => {
  const certificates = [
    {
      title: "AWS Certified Cloud Practitioner",
      image: "/c1.png", // Path relative to the public directory
    },
    {
      title: "Google Data Analytics Certificate",
      image: "/c2.png", // Path relative to the public directory
    },
    {
      title: "Full-Stack Web Development",
      image: "/c3.png", // Path relative to the public directory
    },
  ];

  return (
    <section id="certificates" className="p-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-center">Certifications</h2>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {certificates.map((cert, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
            <img src={cert.image} alt={cert.title} className="w-full rounded-lg" />
            <h3 className="text-xl font-semibold mt-4">{cert.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
