import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import apiHandler from "../../api/apiHandler";

class FormContactUs extends Component {

  state = {
    name: "",
    phone: "",
    email: "",   
    subject: "",
    message: "",
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

    apiHandler
      .contactUs(this.state)
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
        <p>Contact us</p>
        <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value="Toto" />

          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="0600000000"
            pattern="[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}"
            // value="0600000000"
          />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value="toto@gmail.com" />

          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value="Ceci est un test"
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value="Alors, concluant ou pas?"
          ></textarea>
          <button>Submit</button>
        </form>
      </section>
    );
  }
}

export default withRouter(FormContactUs);
