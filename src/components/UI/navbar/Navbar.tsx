import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import React from "react";

interface NavbarProps {
  color: string;
  className: string;
}

interface NavItem {
  title: string;
  path: string;
}

const Navbar: React.FC<NavbarProps> = ({ color, className }) => {
  const { pathname } = useLocation();

  const navItems: NavItem[] = [
    { title: "МАСТЕР", path: "/about" },
    { title: "КАТАЛОГ", path: "/catalog" },
    { title: "КОНТАКТЫ", path: "/contacts" },
  ];

  return (
    <nav className={`nav ${className}`}>
      <ul className={color === "white" ? "nav__list" : "nav__list black"}>
        {navItems.map((item) => (
          <li key={item.title}
            className={pathname == item.path ? "nav__item active" : "nav__item"}
          >
            <Link to={item.path}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
