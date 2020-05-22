import React from "react";
import { NavLink } from "react-router-dom";
import { withUser } from "../components/Auth/withUser";
import apiHandler from "../api/apiHandler";
import Main from "../pages/Main";
import "../styles/logo.css";

import "../styles/NavMain.css";

const NavMain = props => {
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
    <nav>
      <div className="NavMain">
        <NavLink exact to="/">
          <h3 className="logo">KARHABA</h3>
        </NavLink>
        {context.isLoggedIn && (
          <React.Fragment>
            <div className="NavMainLogin">
              <div className="div-main">
                <NavLink to="/user-edit">
                  {context.user && (
                    <img src={context.user.photo} alt="profil" />
                  )}
                </NavLink>
              </div>
              <div className="div-main">
                <p onClick={handleLogout}>
                  <img src="/images/logout.png" alt="logout" />
                </p>
              </div>
            </div>
          </React.Fragment>
        )}

        {!context.isLoggedIn && (
          <React.Fragment>
            <div className="NavMainLogin">
              <div className="div-main">
                <NavLink to="/signin">
                  <img
                    src="/images/green-round-glossy-login-icon-vector-2976248.png"
                    alt="car"
                  />
                </NavLink>
              </div>
              <div className="div-main-create">
                <NavLink to="/signup">
                  <img src="/images/create account.png" alt="create account" />
                </NavLink>
              </div>
            </div>
          </React.Fragment>
        )}
      </div>
      <div>{props.context.user && <Main />} </div>
    </nav>
  );
};

export default withUser(NavMain);
