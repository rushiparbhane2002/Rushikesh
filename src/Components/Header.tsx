import { Drawer, em } from "@mantine/core";
import { IconHexagonLetterR } from "@tabler/icons-react";
import SideBar from "./SideBar";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@mantine/hooks";
import { click } from "@testing-library/user-event/dist/click";

const links = ["About", "Skills", "Work", "Experience", "Contact"];

const navlinks = (col: Boolean, clicked: any) => {
  const handleClick = () => {
    if (clicked) clicked();
  };
  return links.map((link, index) => {
    return (
      <a
        key={index}
        onClick={handleClick}
        className={`${
          col ? "flex flex-col items-center" : ""
        } text-textColor text-lg font-mono hover:text-primaryColor p-2 `}
        href={`#${link}`}
      >
        <span className="text-primaryColor">0{index + 1}. </span>
        {link}
      </a>
    );
  });
};

const Header = () => {
  const isMobile = useMediaQuery(`(max-width:${em(476)})`);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [shadow, setShadow] = useState(false);

  const controllNavbar = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 70) setShow(false);
    else setShow(true);
    if (window.scrollY > 70) setShadow(true);
    else setShadow(false);
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controllNavbar);
    return () => window.removeEventListener("scroll", controllNavbar);
  }, [lastScrollY]);

  return (
    <nav
      className={`flex ${show ? "translate-y-0" : "translate-y-28"} ${
        shadow ? "shadow-[0px_10px_30px_-10px_#020c1b]" : ""
      } transition-transform duration-500 ease-in-out fixed w-full z-10 h-[18vh] bg-bgColor px-10 text-textColor hover:text-primaryColor justify-between items-center ${
        show ? "" : "hidden"
      }`}
    >
      <IconHexagonLetterR
        className="z-10"
        size={60}
        color="#64FFDA"
        stroke={1.25}
      />
      <div className="md:flex gap-8 hidden">{navlinks(false, null)}</div>
      <SideBar />
    </nav>
  );
};

export default Header;
export { navlinks };
