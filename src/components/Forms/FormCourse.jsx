import React from "react";
import apiHandler from "../../api/apiHandler";

class CourseForm extends React.Component {
  state = {
    type: "",
    duration: "",
    startAddress: "",
    finishAddress: "",
    date: "",
    price: "",
    isFinished: "",
    userID: { type: Schema.Types.ObjectId, ref: "User" },
    driverID: { type: Schema.Types.ObjectId, ref: "Driver" }
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

    fd.append("type", this.state.type);
    fd.append("duration", this.state.duration);
    fd.append("startAddress", this.state.startAddress);
    fd.append("finishAddress", this.state.finishAddress);
    fd.append("date", this.state.date);
    fd.append("price", this.state.price);
    fd.append("isFinished", this.state.isFinished);

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
          <label htmlFor="startaddress">Start address</label>
          <input type="text" id="startaddress" email="startaddress" />
        </div>
        <div>
          <label htmlFor="finishaddress">Finish address</label>
          <input type="text" id="finishaddress" name="finishaddress" />
        </div>

        <div>
          <label htmlFor="date">Date</label>
          <input type="date" id="date" email="date" />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input type="text" id="price" email="price" />
        </div>
        <div>
          <label htmlFor="duration">Duration</label>
          <input type="text" id="duration" name="duration" />
        </div>
        <div>
          <label htmlFor="isFinished">isFinished</label>
          <input type="text" id="isFinished" email="isFinished" />
        </div>

        <button>Submit</button>
      </form>
    );
  }
}

export default CourseForm;
