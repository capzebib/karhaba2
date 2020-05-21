import React from "react";
import { Link } from "react-router-dom";
import "../styles/main.css";

const Main = props => {
  return (
    <div className="main">
      <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>

          <ul id="menu">
            <li>
              <Link className="link" to="/user-edit">
                My profil
              </Link>
            </li>
            <li>
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="link" to="/Mycourses">
                Mes trajets
              </Link>
            </li>
            <li>
              <Link className="link" to="/Drivers">
                Drivers
              </Link>
            </li>
            <li>
              <Link className="link" to="/AboutUs">
                About us
              </Link>
            </li>
            <li>
              <Link className="link" to="/ContactUs">
                Contact us
              </Link>
            </li>
            <li>
              <Link className="link" to="/LegalNotice">
                Legal notice
              </Link>
            </li>
            <li>
              <Link className="link" to="/Logout">
                Log out
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Main;

