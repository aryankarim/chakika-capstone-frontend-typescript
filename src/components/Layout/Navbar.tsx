import { Link } from "react-router-dom";

const navItems = [
  { pathName: "Home", href: "/" },
  { pathName: "Garage", href: "/garage" },
  { pathName: "Account", href: "/account" },
  { pathName: "Contact Us", href: "/contact" },
  { pathName: "Find", href: "/find" },
  { pathName: "Cart", href: "/cart" },
];

export default function Navbar() {
  return (
    <nav className="container mx-auto flex items-center gap-4 h-10">
      {navItems.map(({ pathName, href }) => {
        return <Link to={href}>{pathName}</Link>;
      })}
    </nav>
  );
}
