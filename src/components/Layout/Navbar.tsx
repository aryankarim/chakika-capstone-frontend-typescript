import { Link } from "react-router-dom";
import { CgMenu, CgClose } from "react-icons/cg";
import { useState } from "react";
import Menu from "../shared/MUI/Menu";

const navItems = [
  { pathName: "Home", href: "/" },
  { pathName: "Garage", href: "/garage" },
  { pathName: "Contact Us", href: "/contact" },
  { pathName: "Search", href: "/search" },
  { pathName: "Cart", href: "/" },
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
          !isClosed
            ? "h-screen w-screen fixed flex-col"
            : "h-16 justify-between"
        } md:h-16`}
      >
        {isClosed ? (
          <CgMenu className="md:hidden w-6 h-6 m-5" onClick={openMenu} />
        ) : (
          <CgClose className="md:hidden w-6 h-[24px] m-5" onClick={openMenu} />
        )}
        <div
          className={`${
            isClosed ? "hidden" : "flex"
          } md:flex items-center gap-1 md:gap-6 flex-col md:flex-row w-full`}
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

        {isClosed && (
          <div className={`h-full flex items-center mx-2 `}>
            <Menu />
          </div>
        )}
      </nav>
    </>
  );
}
