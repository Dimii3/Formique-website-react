import logo from "../assets/images/logo-formique.svg";

const links = [
  { name: "About", href: "#" },
  { name: "Products", href: "#" },
  { name: "Process", href: "#" },
  { name: "Contact", href: "#" },
];

export default function Nav() {
  return (
    <nav className="nav">
      <a href="#" className="nav__logo">
        <img src={logo} alt="Formique Logo" className="nav__logo-image" />
        <span className="nav__logo-text">Formique</span>
      </a>
      <ul className="nav__links">
        {links.map((link) => (
          <li key={link.name} className="nav__link-item">
            <a href={link.href}>{link.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
