import React from "react";
import apiHandler from "../../api/apiHandler";
import UserContext from "../Auth/UserContext";
import "../../styles/signinup.css";

class UserEditForm extends React.Component {
  static contextType = UserContext;

  state = {};

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleForm = event => {
    event.preventDefault();

    apiHandler
      .updateUser(this.state)
      .then(data => {
        this.context.setUser(data);
        // this.props.history.push("/users");
      })
      .catch(apiError => {
        console.log(apiError.response.data.message);
      });
  };

  render() {
    if (!this.context.user) return null;

    return (
      <div>
        <form
          className="form"
          onChange={this.handleChange}
          onSubmit={this.handleForm}
        >
          <label className="label" htmlFor="photo">
            Photo
          </label>
          <input className="input" type="file" id="photo" name="photo" />
          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            className="input"
            type="email"
            id="email"
            name="email"
            defaultValue={this.context.user.email}
          />
          <label className="label" htmlFor="username">
            Username
          </label>
          <input
            className="input"
            type="text"
            id="username"
            name="username"
            defaultValue={this.context.user.username}
          />
          <div>
            <label className="label" htmlFor="gender">
              Gender
            </label>
            <div className="input">
              <select
                id="category"
                defaultValue="-1"
                name="category"
                onChange={this.handleChange}
                defaultValue={this.context.user.gender}
              >
                <option value="-1" disabled>
                  Select your gender
                </option>
                <option value="man">Man</option>
                <option value="woman">Woman</option>
              </select>
            </div>
          </div>

          <label className="label" htmlFor="firstname">
            First name
          </label>
          <input
            className="input"
            type="text"
            id="firstname"
            name="firstname"
            defaultValue={this.context.user.firstname}
          />
          <label className="label" htmlFor="lastname">
            Last name
          </label>
          <input
            className="input"
            type="text"
            id="lastname"
            name="lastname"
            defaultValue={this.context.user.lastname}
          />
          <label className="label" htmlFor="birth">
            Birth
          </label>
          <input className="input" type="date" id="birth" name="birth" />
          <label className="label" htmlFor="password">
            Password
          </label>
          <input
            className="input"
            type="password"
            id="password"
            name="password"
          />
          <div className="container">
            <button className="btn btn-4">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default UserEditForm;
