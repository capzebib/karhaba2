import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import apiHandler from "../../api/apiHandler";
import "../../styles/signinup.css";

class FormContactUs extends Component {
  state = {
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: ""
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
        <form
          className="form"
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        >
          <label className="label" htmlFor="name">
            Name
          </label>
          <input
            className="input"
            type="text"
            id="name"
            name="name"
            value="Toto"
          />

          <label className="label" htmlFor="phone">
            Phone
          </label>
          <input
            className="input"
            type="tel"
            id="phone"
            name="phone"
            placeholder="0600000000"
            pattern="[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}"
            // value="0600000000"
          />

          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            className="input"
            type="email"
            id="email"
            name="email"
            value="toto@gmail.com"
          />

          <label className="label" htmlFor="subject">
            Subject
          </label>
          <input
            className="input"
            type="text"
            id="subject"
            name="subject"
            value="Ceci est un test"
          />

          <label className="label" htmlFor="message">
            Message
          </label>
          <textarea
            className="input"
            id="message"
            name="message"
            value="Alors, concluant ou pas?"
          ></textarea>
          <div className="container">
            <button className="btn btn-4">Submit</button>
          </div>
          
        </form>
      </section>
    );
  }
}

export default withRouter(FormContactUs);
