import React, { Component } from "react";

import UserContext from "../Auth/UserContext";
import { Link, withRouter } from "react-router-dom";
import apiHandler from "../../api/apiHandler";
import "../../styles/signinup.css";

class FormSignin extends Component {
  static contextType = UserContext;

  state = {
    email: "",
    password: ""
  };

  handleChange = event => {
    const key = event.target.name;

    // You can test more if you have to handle different sorts of inputs.
    const value =
      event.target.type === "file"
        ? event.target.files[0]
        : event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    this.setState({ [key]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    apiHandler
      .signin(this.state)
      .then(data => {
        this.context.setUser(data);
        this.props.history.push("/");
      })
      .catch(error => {
        console.log(error);
        // Display error message here, if you set the state
      });
  };

  render() {
    return (
      <div>
        <p className="title">Sign in</p>
        <form
          className="form"
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        >
          <div className="form-label">
            <label className="label" htmlFor="email">
              Email
            </label>
            <input className="input" type="email" id="email" name="email" />
          </div>
          <div className="form-label">
            <label className="label" htmlFor="password">
              Password
            </label>
            <input
              className="input"
              type="password"
              id="password"
              name="password"
            />
          </div>
          <div className="container">
            <button className="btn btn-4">Signin</button>
          </div>
        </form>
        <div className="form-section-bottom">
          <p>You don't have an account? </p>
          <Link className="link" to="/signup">
            Sign up
          </Link>
        </div>
      </div>
    );
  }
}

export default withRouter(FormSignin);
