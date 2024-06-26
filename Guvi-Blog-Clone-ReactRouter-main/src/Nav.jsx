import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand">
        【R】Your Logo 
        </Link>
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
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active">
                ALL
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/FullStackDevelopment" className="nav-link">
                FULL STACK DEVELOPMENT
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/DataScience" className="nav-link">
                DATA SCIENCE
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/CyberSecurity" className="nav-link">
                CYBER SECURITY
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Career" className="nav-link" aria-disabled="true">
                CAREER
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
