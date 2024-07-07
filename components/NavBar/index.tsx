import Image from "next/image";
import Hamburger from "./Hamburger";

const NavBar = () => {
  return (
    <nav className="flex flex-col items-center w-full p-3 sticky top-0 bg-white shadow z-20">
      <div className="flex justify-between items-center max-w-5xl w-full">
        <div className="flex items-start gap-4">
          <Hamburger />
          <a href="/">
            <Image
              src="inito-logo.svg"
              alt="Inito Logo"
              width={105}
              height={40}
              className="h-9 sm:h-10"
            />
          </a>
        </div>
        <div className="sm:flex items-center gap-6 font-semibold hidden">
          <a href="/" className="hover:text-lightgreen">
            About Us
          </a>
          <a href="/" className="hover:text-lightgreen">
            Blog
          </a>
          <a href="/" className="hover:text-lightgreen">
            FAQ
          </a>
          <a href="/" className="hover:text-lightgreen">
            Contact Us
          </a>
          <button type="button" className="primary-button py-1 ml-3">
            Try Inito
          </button>
        </div>
        <button type="button" className="primary-button py-1 ml-3 sm:hidden">
          Try Inito
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
