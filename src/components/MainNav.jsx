import React from "react";

const MainNav = ({ links }) => {
  return (
    <ul className="main-nav">
      {links.map((link, index) => (
        <li
          key={index + link.label}
          className="nav-item"
        >
          <a href={link.href}>{link.label}</a>
        </li>
      ))}
    </ul>
  );
};

export default MainNav;
