import React from "react";
import NavItem from "./NavItem";

interface NavMenuProps {
  links: { href: string; label: string }[];
  onLinkClick?: () => void;
  isMobile?: boolean;
}

const NavMenu: React.FC<NavMenuProps> = ({ links, onLinkClick, isMobile }) => (
  <ul
    className={`${
      isMobile
        ? "flex flex-col items-center space-y-4 p-4"
        : "hidden md:flex space-x-6"
    }`}
  >
    {links.map(({ href, label }) => (
      <NavItem key={href} href={href} label={label} onClick={onLinkClick} />
    ))}
  </ul>
);

export default NavMenu;
