import { NavLink } from "react-router-dom";
import logo from "./../../assets/logo.svg";
import { router } from "./../../router"

/**
 * Header component displaying the navigation menu and logo
 *
 * @component
 * @returns {JSX.Element} A header with logo and navigation links
 */
function Header() {
  const navLinks = [];

  router.routes[0].children.forEach((link) => {
    if (link.label) {
      navLinks.push({ to: link.path, label: link.label });
    }
  });
  return (
    <header className="fixed z-20 flex min-h-23 w-full items-center bg-black pr-28 pl-7 shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
      <img
        className="mr-36"
        src={logo}
        alt="logo SportSee"
        width={178}
        height={61}
      />
      <nav className="flex-1">
        <ul className="flex justify-between text-2xl">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                className="hover:text-primary-dark text-white hover:no-underline"
                to={link.to}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
