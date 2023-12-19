// import React from 'react'
import { navLinks } from "../constants";
import { useState } from "react";
// import { personalInfo } from "../constants";

export const Navbar = () => {
  const [active, setActive] = useState("About");
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "var(--hard-color)" }}
    >
      <div className="container-fluid px-0">
        {/* <a className="navbar-brand" href="#">
          <img src={personalInfo.logo} alt="logo" />
        </a> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center pe-xl-5"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`nav-item mx-3 ${
                  active === nav.title ? "active" : ""
                }`}
                onClick={() => {
                  setActive(nav.title);
                }}
              >
                <a
                  className={`nav-link ${
                    active === nav.title ? " font-weight-bolder" : ""
                  }`}
                  aria-current="page"
                  href="#"
                  style={{ color: "var(--fontColor)" }}
                >
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
