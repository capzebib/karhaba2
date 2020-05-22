import React from "react";
import { Link } from "react-router-dom";
import apiHandler from "../api/apiHandler"
import "../styles/main.css";
import { withUser } from "../components/Auth/withUser";

const Main = props => {
  const { context } = props;

  function handleLogout() {
    apiHandler
      .logout()
      .then(() => {
        context.removeUser();
      })
      .catch(error => {
        console.log(error);
      });
  }

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
                <p onClick={handleLogout}>Log out</p>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default withUser(Main);

