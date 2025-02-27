const Navbar = () => {
    return (
      <nav className="bg-gray-900 text-white p-4 fixed w-full top-0 z-10">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">ABHISHEK KUMAR</h1>
          <ul className="flex space-x-6">
            <li><a href="#about" className="hover:text-gray-300">About</a></li>
            <li><a href="#projects" className="hover:text-gray-300">Projects</a></li>
            <li><a href="#skills" className="hover:text-gray-300">Skills</a></li>
            <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </div>
      </nav>
    );
  };
  
  export default Navbar;