
// import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
// import { useState, useEffect } from "react";

// const Hero = () => {
//   const [trails, setTrails] = useState([]);

//   // Handle Mouse Move
//   const handleMouseMove = (e) => {
//     const newTrail = {
//       id: Math.random(),
//       x: e.clientX,
//       y: e.clientY,
//       color: `hsl(${Math.random() * 360}, 100%, 70%)`
//     };

//     setTrails((prev) => [...prev, newTrail]);

//     setTimeout(() => {
//       setTrails((prev) => prev.filter((t) => t.id !== newTrail.id));
//     }, 2000);
//   };

//   useEffect(() => {
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   return (
//     <section className="h-screen flex flex-col md:flex-row items-center justify-between px-10 bg-gray-800 text-white relative overflow-hidden">
      
//       {/* Floating Background Dots */}
//       <div className="absolute inset-0 pointer-events-none">
//         {[...Array(20)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute bg-blue-500 w-4 h-4 rounded-full opacity-30 animate-float"
//             style={{
//               top: `${Math.random() * 100}%`,
//               left: `${Math.random() * 100}%`,
//               animationDuration: `${Math.random() * 5 + 5}s`
//             }}
//           ></div>
//         ))}
//       </div>

//       {/* Cursor Trail Effect */}
//       {trails.map((trail) => (
//         <span
//           key={trail.id}
//           className="absolute text-3xl font-bold opacity-80"
//           style={{
//             top: trail.y,
//             left: trail.x,
//             color: trail.color,
//             transform: "translate(-50%, -50%)",
//             transition: "opacity 1s ease-out"
//           }}
//         >
//           Abhi
//         </span>
//       ))}

//       {/* Left Side - Text Content */}
//       <div className="w-full md:w-1/2 text-left space-y-4 ">
//         <h1 className="text-5xl font-bold">
//           Hi, I'm <span className="text-blue-400">Abhishek</span>
//         </h1>
//         <p className="text-xl">
//           Full Stack Developer | AI & Cloud Enthusiast
//         </p>
//         <a href="#projects" className="mt-6 inline-block bg-blue-500 px-6 py-3 rounded-lg text-white font-semibold hover:bg-blue-600 transition">
//           View My Work
//         </a>
//       </div>

//       {/* Right Side - Profile Image */}
//       <div className="w-full md:w-1/2 flex justify-center z-10">
//         <img
//           src="../public/profile.gif" // Replace with actual profile pic
//           alt="Profile"
//           className="w-64 h-64 rounded-full border-4 border-blue-500 shadow-xl transform hover:scale-105 transition duration-300"
//         />
//       </div>

//       {/* Social Media Links at Bottom */}
//       <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-6 z-50">
//         <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer"
//           className="p-3 bg-gray-800 rounded-full text-white hover:bg-blue-500 transition">
//           <FaGithub size={24} />
//         </a>
//         <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer"
//           className="p-3 bg-gray-800 rounded-full text-white hover:bg-blue-500 transition">
//           <FaLinkedin size={24} />
//         </a>
//         <a href="https://instagram.com/yourinstagram" target="_blank" rel="noopener noreferrer"
//           className="p-3 bg-gray-800 rounded-full text-white hover:bg-pink-500 transition">
//           <FaInstagram size={24} />
//         </a>
//       </div>

//     </section>
//   );
// };

// export default Hero;








const Hero = () => {
    return (
      <section className="h-screen flex flex-col justify-center items-center text-center bg-gray-900 text-white relative">
        {/* Background Animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-50 opacity-20 animate-pulse"></div>
        
        {/* Profile & Text */}
        <img
          src="/profile.gif" // Replace with actual profile pic
          alt="Profile"
          className="w-40 h-40 rounded-full border-4 border-blue-500 shadow-xl z-10"
        />
        <h1 className="text-5xl font-bold mt-4 z-10">
          Hi, I'm <span className="text-blue-400">Abhishek Kumar</span>
        </h1>
        <p className="text-xl z-10">Aspiring Full Stack Developer | Passionate about AI</p>
        <a href="#projects" className="mt-6 bg-blue-500 px-6 py-3 rounded-lg text-white font-semibold hover:bg-blue-600 z-10">
          View My Work
        </a>
      </section>
    );
  };
  
  export default Hero;