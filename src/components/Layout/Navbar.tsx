import { Link } from "react-router-dom";
import { CgMenu, CgClose } from "react-icons/cg";
import { useState } from "react";

const navItems = [
  { pathName: "Home", href: "/" },
  { pathName: "Garage", href: "/garage" },
  { pathName: "Account", href: "/account" },
  { pathName: "Contact Us", href: "/contact" },
  { pathName: "Find", href: "/find" },
  { pathName: "Cart", href: "/cart" },
];

export default function Navbar() {
  const [isClosed, setIsClosed] = useState(true);

  const openMenu = () => {
    setIsClosed((prev) => !prev);
  };

  return (
    <>
      <nav
        className={`md:container md:mx-auto flex items-start md:items-center ${
          !isClosed ? "h-screen flex-col" : "h-10"
        } md:h-10`}
      >
        {isClosed ? (
          <CgMenu className="md:hidden w-6 h-6 m-2" onClick={openMenu} />
        ) : (
          <CgClose className="md:hidden w-6 h-6 m-2" onClick={openMenu} />
        )}
        <div
          className={`${
            isClosed ? "hidden" : "flex"
          } md:flex items-center gap-4 bg-white flex-col md:flex-row w-full `}
        >
          {navItems.map(({ pathName, href }) => {
            return (
              <Link to={href} onClick={openMenu}>
                {pathName}
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
