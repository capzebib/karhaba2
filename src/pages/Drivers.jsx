import React from "react";
import axios from "axios";
import apiHandler from "../api/apiHandler.js";
import { Link, withRouter } from "react-router-dom";
import "../styles/drivers.css";
class Drivers extends React.Component {
  state = {
    drivers: []
  };

  //Get the drivers
  componentDidMount() {
    // faire le call axios qui te permet de récuperer les drivers
    // updater le state en fonction
    apiHandler
      .getDrivers()
      .then(dbRes => {
        this.setState({ drivers: dbRes });
        // console.log(dbRes);
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
      <div className="driver">
        <p className="title">The drivers</p>
        <table className="table">
          <thead className="table">
            <tr>
              <th className="table">First name</th>
              <th className="table">Last name</th>
              <th className="table">Photo</th>
            </tr>
          </thead>
          {this.state.drivers.map((driver, index) => (
            <tbody key={index} className="table">
              <tr>
                <td className="row"><Link to={`/driver/${driver.id}`}>{driver.firstname}</Link></td>
                <td className="row"><Link to={`/driver/${driver.id}`}>{driver.lastname}</Link></td>
                <td className="row"><Link to={`/driver/${driver.id}`}><img src={driver.photo} /></Link></td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    );
  }
}

export default withRouter(Drivers);
