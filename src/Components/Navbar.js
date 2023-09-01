import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg px-5 pt-3">
      <div className="container-fluid ">
        <img src="/Images/Rivo logo.png" alt="img" className="img-fluid " />
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
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Shop
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Feautures
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <a className="nav-bag" href="#">
          <img
            src="/Images/navbag.png"
            alt="img"
            className="img-fluid"
            id="navbag"
          />
        </a>

        <button className="btn" id="navbtn">
          LOGIN
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
