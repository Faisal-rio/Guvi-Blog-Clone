import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import GuviLogo from '../src/assets/Guvi-blog-logo.png';
import navimg1 from '../src/assets/blog-header.png';

function TopNav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark topnav">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={GuviLogo} alt="GUVI Logo" width="120" height="50" />
          </a>
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
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mt-4">
        <div className="navimg d-flex justify-content-center">
          <img src={navimg1} alt="Blog Header" className="img-fluid rounded shadow" />
        </div>
      </div>
    </>
  );
}

export default TopNav;
