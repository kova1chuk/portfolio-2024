import React from "react";

interface NavItemProps {
  href: string;
  label: string;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ href, label, onClick }) => (
  <li>
    <a href={href} className="hover:text-blue-400 transition" onClick={onClick}>
      {label}
    </a>
  </li>
);

export default NavItem;
