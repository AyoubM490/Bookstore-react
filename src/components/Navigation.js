import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: "/",
      text: "Books",
    },
    {
      id: 2,
      path: "/Categories",
      text: "Categories",
    },
  ];

  return (
    <nav className="navBar">
      <div className="navBarWrap">
        <div>
          <h1>Bookstore CMS</h1>
        </div>
        <ul className="navLinks">
          {links.map((link) => (
            <li key={link.id} className="navLink">
              <Link
                data-testid={link.id}
                to={link.path}
                activeClassName="active-link"
                exact
                className="link"
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
