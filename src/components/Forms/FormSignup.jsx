import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import UserContext from "../Auth/UserContext";
import apiHandler from "../../api/apiHandler";
// import {withUser} from "../Auth/withUser.jsx";

class FormSignup extends Component {
  static contextType = UserContext;

  state = {
    photo: "",
    email: "toto@gmail.com",
    username: "toto",
    gender: "Man",
    firstname: "toto",
    lastname: "foobar",
    birth: "",
    password: "1234"
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
    apiHandler
      .signup(this.state)
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
      <section>
        <form
          autoComplete="off"
          className="formSigninup"
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        >
          <label htmlFor="photo">Photo</label>
          <input type="file" id="photo" name="photo" />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            defaultValue={this.state.email}
          />
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value="le fameux Toto"
          />
          <label htmlFor="gender">Gender</label>
          <select id="category" defaultValue="-1" name="category">
            <option value="-1" disabled>
              Select your gender
            </option>
            <option value="man">Man</option>
            <option value="woman">Woman</option>
          </select>
          <label htmlFor="firstname">First name</label>
          <input type="text" id="firstname" name="firstname" value="toto" />
          <label htmlFor="lastname">Last name</label>
          <input type="text" id="lastname" name="lastname" value="Bentoto" />
          <label htmlFor="birth">Birth</label>
          <input type="date" id="birth" name="birth" />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" value="1234" />
          <button>Submit</button>
        </form>

        <div className="form-section-bottom">
          <p>Already have an account? </p>
          <Link className="link" to="/signin">
            Log in
          </Link>
        </div>
      </section>
    );
  }
}

export default withRouter(FormSignup);
