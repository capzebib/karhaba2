import React from "react";
import apiHandler from "../../api/apiHandler";
import UserContext from "../Auth/UserContext";

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
        <form onChange={this.handleChange} onSubmit={this.handleForm}>
          <label htmlFor="photo">Photo</label>
          <input type="file" id="photo" name="photo" />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            defaultValue={this.context.user.email}
          />
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            defaultValue={this.context.user.username}
          />
          <label htmlFor="gender">Gender</label>
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
          <label htmlFor="firstname">First name</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            defaultValue={this.context.user.firstname}
          />
          <label htmlFor="lastname">Last name</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            defaultValue={this.context.user.lastname}
          />
          <label htmlFor="birth">Birth</label>
          <input type="date" id="birth" name="birth" />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default UserEditForm;
