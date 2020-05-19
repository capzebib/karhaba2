import React, { Component } from "react";
import apiHandler from "../api/apiHandler";

class Reservations extends Component {
  state = {
    courses: []
  };

  componentDidMount() {
    // utilisation de la fonction apiHnalder,
    // quand tu as la reponse, tu set le state avec toutes les courses
    apiHandler
      .getAllCourses()
      .then(dbRes => {
        this.setState({ courses: dbRes });
        console.log(dbRes);
      })
      .catch(dbErr => {
        console.log(dbErr);
      });
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        {this.state.courses.map(course => (
          // <option value={course._id}>
          //   {driver.firstname} {driver.lastname}
          // </option>
          <ul>
            <li>{course.duration}</li>
            <li>{course.startAddress}</li>
            <li>{course.finishAddress}</li>
            <li>{course.date}</li>
            <li>{course.price}</li>
            <li>{course.isFinished}</li>
            <li>{course.userID}</li>
            <li>{course.driverID}</li>
          </ul>
        )) /* Mapper autour des courses et les afficher ici*/}
      </div>
    );
  }
}

export default Reservations;
