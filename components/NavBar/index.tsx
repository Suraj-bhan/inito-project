import Image from "next/image";

const NavBar = () => {
  return (
    <nav className="flex flex-col items-center w-full p-3 sticky top-0 bg-white shadow z-20">
      <div className="flex justify-between max-w-5xl w-full">
        <div>
          <a href="/">
            <Image
              src="inito-logo.svg"
              alt="Inito Logo"
              width={105}
              height={40}
            />
          </a>
        </div>
        <div className="flex items-center gap-6 font-semibold">
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
      </div>
    </nav>
  );
};

export default NavBar;
