const Certificates = () => {
const certificates = [
    {
    title: "AWS Certified Cloud Practitioner",
    image: "../public/c1.png", // Replace with actual certificate image URL
    },
    {
    title: "Google Data Analytics Certificate",
    image: "../public/c2.png", // Replace with actual certificate image URL
    },
    {
    title: "Full-Stack Web Development",
    image: "../public/c3.png", // Replace with actual certificate image URL
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
