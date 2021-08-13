import React from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.scss";

function navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Link
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="form-check form-switch me-5">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
          />
          <label className="form-check-label" for="flexSwitchCheckDefault">
            Theme
          </label>
        </div>
      </nav>
      <nav className="navbar fixed-bottom navbar-light bg-light">
        <div className="container-fluid justify-content-center">
          <a className="navbar-brand" href="#">
            Fixed bottom
          </a>
        </div>
      </nav>
    </div>
  );
}

export default navbar;
