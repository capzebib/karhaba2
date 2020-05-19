import React from "react";
import apiHandler from "../../api/apiHandler";

class DriverForm extends React.Component {
  state = {
    photo: "",
    email: "",
    useremail: "",
    gender: "",
    firstemail: "",
    lastemail: "",
    password: ""
  };

  handleChange = event => {
    // console.log(event.target.email);
    let value;
    if (event.target.type === "file") {
      value = event.target.files[0];
    } else {
      value = event.target.value;
    }
    this.setState({ [event.target.email]: value });
  };

  handleForm = event => {
    event.preventDefault();

    const fd = new FormData();

    fd.append("photo", this.state.photo);
    fd.append("email", this.state.email);
    fd.append("username", this.state.useremail);
    fd.append("gender", this.state.gender);
    fd.append("firstname", this.state.firstemail);
    fd.append("lastname", this.state.lastemail);
    fd.append("password", this.state.password);

    apiHandler
      .post("/api/drivers", fd)
      .then(apiResponse => {
        this.props.history.push("/drivers");
      })
      .catch(apiError => {
        console.log(apiError.response.data.message);
      });
  };

  render() {
    return (
      <form onChange={this.handleChange} onSubmit={this.handleForm}>
        <div>
          <label htmlFor="photo">Photo</label>
          <input type="file" id="photo" email="photo" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" email="email" />
        </div>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" />
        </div>
        <div>
          <label htmlFor="gender">Gender</label>
          <select
            name="gender"
            id="gender"
            onChange={this.handleChange}
            value={this.state.gender[0]}
          >
            <option value="man">Man</option>
            <option value="woman">Women</option>
          </select>
        </div>

        <div>
          <label htmlFor="firstname">First Name</label>
          <input type="text" id="firstname" email="firstname" />
        </div>

        <div>
          <label htmlFor="lastname">Last Name</label>
          <input type="text" id="lastname" email="lastname" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="text" id="password" email="password" />
        </div>

        <button>Submit</button>
      </form>
    );
  }
}

export default DriverForm;
