import { useEffect, useState } from "react";
import logo from "../assets/images/logo-formique.svg";

const links = [
  { name: "About", href: "#about" },
  { name: "Products", href: "#products" },
  { name: "Process", href: "#process" },
  { name: "Contact", href: "#contact" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.documentElement.style.overflowX = "hidden";
    }

    return () => {
      document.documentElement.style.overflow = "";
      document.documentElement.style.overflowX = "hidden";
    };
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <>
      <button
        onClick={toggleMenu}
        className={`nav-btn ${isOpen ? "active" : ""}`}
        aria-label="Menu Button"
      >
        <div className="nav-btn__line"></div>
        <div className="nav-btn__line"></div>
        <div className="nav-btn__line"></div>
      </button>
      <nav className="nav">
        <a href="#" className="nav__logo">
          <img src={logo} alt="Formique Logo" className="nav__logo-image" />
          <span className="nav__logo-text">Formique</span>
        </a>
        <ul className={`nav__links ${isOpen ? "active" : ""}`}>
          {links.map((link) => (
            <li onClick={closeMenu} key={link.name} className="nav__link-item">
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
