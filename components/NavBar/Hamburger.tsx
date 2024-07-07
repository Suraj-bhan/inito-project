import "./style.css";

const Hamburger = () => {
  return (
    <div id="menuToggle" className="sm:hidden">
      <input type="checkbox" />
      <span></span>
      <span></span>
      <span></span>
      <ul id="menu">
        <a href="#">
          <li>About Us</li>
        </a>
        <a href="#">
          <li>Blog</li>
        </a>
        <a href="#">
          <li>FAQ</li>
        </a>
        <a href="#">
          <li>Contact Us</li>
        </a>
      </ul>
    </div>
  );
};

export default Hamburger;
