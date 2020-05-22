import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import UserContext from "../Auth/UserContext";
import apiHandler from "../../api/apiHandler";
import "../../styles/signinup.css";

// import {withUser} from "../Auth/withUser.jsx";

class FormSignup extends Component {
  static contextType = UserContext;

  state = {
    photo: null,
    email: null,
    username: null,
    gender: null,
    firstname: null,
    lastname: null,
    birth: null,
    password: null
  };

  handleChange = event => {
    const value =
      event.target.type === "file"
        ? event.target.files[0]
        : event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    const key = event.target.name;

    this.setState({ [key]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    // const {authContext}=this.props;
    console.log(this.state);
    
    const fd = new FormData();

    fd.append("photo", this.state.photo);
    fd.append("email", this.state.email);
    fd.append("username", this.state.username);
    fd.append("gender", this.state.gender);
    fd.append("firstname", this.state.firstname);
    fd.append("lastname", this.state.lastname);
    fd.append("birth", this.state.birth);
    fd.append("password", this.state.password);

    apiHandler
      .signup(fd)
      .then(data => {
        this.context.setUser(data);
        this.props.history.push("/");
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <p className="title">Sign up</p>
        <div className="form">
          <form
            className="form"
            autoComplete="off"
            className="form-signinup"
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
          >
            <div className="form-label">
              <label className="label" htmlFor="photo">
                Photo
              </label>
              <input className="input" type="file" id="photo" name="photo" />
            </div>
            <div className="form-label">
              <label className="label" htmlFor="email">
                Email
              </label>
              <input className="input" type="email" id="email" name="email" />
            </div>
            <div className="form-label">
              <label className="label" htmlFor="username">
                Username
              </label>
              <input
                className="input"
                type="text"
                id="username"
                name="username"
              />
            </div>
            <div className="form-label">
              <label className="label" htmlFor="gender">
                Gender
              </label>
              <div className="input">
                <select id="category" defaultValue="-1" name="gender">
                  <option value="-1" disabled>
                    Select your gender
                  </option>
                  <option value="man">Man</option>
                  <option value="woman">Woman</option>
                </select>
              </div>
            </div>
            <div className="form-label">
              <label className="label" htmlFor="firstname">
                First name
              </label>
              <input
                className="input"
                type="text"
                id="firstname"
                name="firstname"
              />
            </div>
            <div className="form-label">
              <label className="label" htmlFor="lastname">
                Last name
              </label>
              <input
                className="input"
                type="text"
                id="lastname"
                name="lastname"
              />
            </div>

            <div className="form-label">
              <label className="label" htmlFor="birth">
                Birth
              </label>
              <input className="input" type="date" id="birth" name="birth" />
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
              <button className="btn btn-4">Submit</button>
            </div>
          </form>
        </div>
        <div className="form"></div>

        <div className="form-section-bottom">
          <p>Already have an account? </p>
          <Link className="link" to="/signin">
            Log in
          </Link>
        </div>
      </div>
    );
  }
}

export default withRouter(FormSignup);
