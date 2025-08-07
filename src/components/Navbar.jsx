import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo nav.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <img className="w-36 mr-2" src={logo} alt="Logo" />

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex  space-x-12 items-center">
            {navItems.map((item, index) => (
              <li key={index} className="relative group flex items-center justify-center">
                <a
                  href={item.href}
                  className="uppercase text-[16px] text-[#e1e1e1] transition-colors duration-400 ease-[cubic-bezier(0.25,0.8,0.25,1)] group-hover:text-white focus:text-white block text-center"
                >
                  {item.label}
                  <span className="absolute inset-x-0 mx-auto -bottom-[2px] h-[2px] w-0 bg-white transition-all duration-400 ease-[cubic-bezier(0.25,0.8,0.25,1)] group-hover:w-full group-focus:w-full"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Contact Button (Desktop) */}
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a
              href="#contact"
              className="bg-gradient-to-r from-[#58A0C8] to-[#34699A] py-2 px-3 rounded-md"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a
                href="#Contact"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-[#58A0C8] to-[#34699A]"
              >
                contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
