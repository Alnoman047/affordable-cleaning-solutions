import { NavLink } from "react-router-dom";


const Navbar = () => {
    const navOptions = (
        <>
          <li>
            <NavLink  to="/">
              Home
            </NavLink>
          </li>
    
          <li>
            <NavLink
              
              to="/services"
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              
              to="/gallery"
            >
              Gallery
            </NavLink>
          </li>
          
        </>
      );

      const navOptions2 = (
        <>
        <li>
            <NavLink
              
              to="/about"
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              
              to="/blog"
            >
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              
              to="/contact"
            >
              Contact Us
            </NavLink>
          </li>
        </>
      );

      
    return (
        <div>
            <header className="p-4 bg-[#1F7A8C]  ">
	<div className="container flex justify-between h-16 mx-auto md:justify-center md:space-x-8">
		<ul className="items-stretch hidden space-x-3 md:flex">
			<div className="flex items-center px-4 -mb-1 gap-2 text-white">
                {navOptions}
            </div>
		</ul>
		<a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
			<img className="" src="./../../../assets/logoMain-removebg-preview.png" alt="" />
		</a>
		<ul className="items-stretch hidden space-x-3 md:flex">
        <div className="flex items-center px-4 -mb-1 gap-2 text-white">
                {navOptions2}
            </div>
		</ul>
		<button title="Button" type="button" className="p-4 md:hidden">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-100 dark:text-gray-800">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button>
	</div>
</header>
        </div>
    );
};

export default Navbar;