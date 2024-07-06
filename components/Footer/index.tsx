import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-darkgreen text-white w-full flex flex-col items-center">
      <div className="grid grid-cols-4 max-w-5xl w-full py-12 h-96">
        <div className="flex justify-between col-span-3 text-lightText">
          <ul className="flex flex-col gap-5">
            <li className="font-semibold text-white">Company</li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact Us</a>{" "}
            </li>
          </ul>
          <ul className="flex flex-col gap-5">
            <li className="font-semibold text-white">Support</li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Returns & Warranty</a>{" "}
            </li>
          </ul>
          <ul className="flex flex-col gap-5">
            <li className="font-semibold text-white">Get In Touch</li>
            <li>
              <a href="#">+1 815-369-0989</a>
            </li>
            <li>
              <a href="mailto:help@inito.com">help@inito.com</a>
            </li>
            <li>
              <a href="#">355 Bryant Street, Suite 403, San Francisco 94017</a>
            </li>
          </ul>
        </div>
        <div className="flex items-start col-span-1 w-full justify-between">
          <Image src="fb-logo.svg" alt="facebook logo" width={28} height={28}/>
          <Image src="ig-logo.svg" alt="Instagram logo" width={28} height={28}/>
          <Image src="linkedin-logo.svg" alt="Linkedin logo" width={28} height={28}/>
          <Image src="yt-logo.svg" alt="Youtube logo" width={28} height={28}/>
        </div>
      </div>
      <div className="flex flex-col items-center w-full bg-black/20 p-4">
        <div className="flex max-w-5xl w-full justify-between items-center">
          <Image
            src="footer-logo.svg"
            alt="footer logo"
            width={83}
            height={28}
          />
          <p className="text-lightText text-xs font-semibold">
            Copyright 2023, Inito Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
