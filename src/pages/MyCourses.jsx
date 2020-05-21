import React, { Component } from "react";
import apiHandler from "../api/apiHandler";

class MyCourses extends Component {
  state = {
    courses: [],
    userID: "",
    drivers: []
  };

  componentDidMount() {
    // utilisation de la fonction apiHnalder,
    // quand tu as la reponse, tu set le state avec toutes les courses
    apiHandler
      .getAllCourses()
      .then(dbRes => {
        this.setState({ courses: dbRes });
        // console.log(dbRes);
      })
      .catch(dbErr => {
        console.log(dbErr);
      });
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleDelete = id => {
    apiHandler
      .deleteCourse(id)
      .then(data => {
        const updatedCourses = this.state.courses.filter(
          course => course._id !== id
        );
        this.setState({ courses: updatedCourses });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        {this.state.courses.map(course => (
          // <option value={course._id}>
          //   {driver.firstname} {driver.lastname}
          // </option>
          // <div>
          <ul>
            <li>
              Duration : {course.duration.hour}h{course.duration.min}min
            </li>
            <li>Start address: {course.startAddress}</li>
            <li>Finish address: {course.finishAddress}</li>
            <li>Date: {course.date}</li>
            <li>Price: {course.price}</li>
            <li>{course.isFinished}</li>
            <button onClick={event => this.handleDelete(course._id)}>
              Cancel this course
            </button>
            <p>------------------------</p>
          </ul>
        )) /* Mapper autour des courses et les afficher ici*/}
      </div>
    );
  }
}

export default MyCourses;
