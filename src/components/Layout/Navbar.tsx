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

  const closeMenu = () => {
    setIsClosed(true);
  };
  return (
    <>
      <nav
        className={`md:container md:mx-auto flex items-start md:items-center bg-white ${
          !isClosed ? "h-screen w-screen fixed flex-col" : "h-12"
        } md:h-10`}
      >
        {isClosed ? (
          <CgMenu className="md:hidden w-6 h-6 m-3" onClick={openMenu} />
        ) : (
          <CgClose className="md:hidden w-6 h-6 m-3" onClick={openMenu} />
        )}
        <div
          className={`${
            isClosed ? "hidden" : "flex"
          } md:flex items-center gap-1 md:gap-6 flex-col md:flex-row w-full `}
        >
          {navItems.map(({ pathName, href }) => {
            return (
              <Link
                key={pathName}
                to={href}
                {...(!isClosed && {
                  onClick: closeMenu,
                })}
                style={{
                  ...(!isClosed && {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "38px",
                    width: "100%",
                  }),
                }}
              >
                {pathName}
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
