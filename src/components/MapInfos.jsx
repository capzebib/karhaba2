import React from "react";
import Autocomplete from "./Autocomplete";
import axios from "axios";
import apiHandler from "../api/apiHandler.js";
import { Redirect, Link, withRouter } from "react-router-dom";
import MapPlan from "../components/MapPlan";
import "../styles/map-info.css";
class MapInfos extends React.Component {
  state = {
    locationA: null,
    locationB: null,
    directions: null,
    distance: null,
    price: 0,
    duration: 0,
    date: null,
    drivers: [],
    steps: null,
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

  handleLocationA = place => {
    this.setState({ locationA: place });
  };

  handleLocationB = place => {
    // console.log(place);
    this.setState({ locationB: place });
  };

  handleDistance = place => {
    console.log(place);
    this.setState({ distance: place });
  };

  calculatePrice(dist) {
    return dist * 0.0025;
  }
  displayDuration(duration) {
    var hours = Math.floor(duration / 3600);
    var minutes = Math.floor((duration / 3600 - hours) * 60);
    if (minutes <= 9) {
      return hours + " heures et " + " 0" + minutes + " minutes";
    } else {
      return hours + " heures et " + minutes + " minutes";
    }
  }

  calculateDuration(duration) {
    var hours = Math.floor(duration / 3600);
    var minutes = Math.floor((duration / 3600 - hours) * 60);

    return { hour: hours, min: minutes };
  }

  performDirectionSearch = () => {
    // console.log("je suis appelé ");
    const token = process.env.REACT_APP_MAPBOX_TOKEN;
    // console.log(token);
    const coordinatesA = this.state.locationA.geometry.coordinates;
    const coordinatesB = this.state.locationB.geometry.coordinates;
    // console.log(coordinatesA, coordinatesB);
    const allCoordinates = `${coordinatesA[0]},${coordinatesA[1]};${coordinatesB[0]},${coordinatesB[1]}`;
    // console.log(allCoordinates);

    axios
      .get(
        `https://api.mapbox.com/directions/v5/mapbox/driving/${allCoordinates}?access_token=${token}&steps=true`
      )
      .then(response => {
        this.setState({
          directions: response.data
        });
        // console.log(response.data);
        console.log(response.data.routes[0].legs[0].steps);
      })
      .catch(error => {
        console.log(error);
      });
  };

  displaySteps() {
    const steps = this.state.response.data.routes[0].legs[0].steps;
    for (let i = 0; i < steps.length; i++) {
      return steps[i];
      console.log(steps);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.locationA !== this.state.locationA ||
      prevState.locationB !== this.state.locationB
    )
      if (this.state.locationA && this.state.locationB) {
        this.performDirectionSearch();
      }
  }

  createReservation = event => {
    event.preventDefault();
    const startAddress = this.state.locationA.place_name;
    const finishAddress = this.state.locationB.place_name;
    const price = this.calculatePrice(this.state.directions.routes[0].distance);
    const duration = this.calculateDuration(
      this.state.directions.routes[0].duration
    );
    const date = this.state.date;
    const driverID = this.state.driverID;
    const course = {
      startAddress,
      driverID,
      duration,
      price,
      finishAddress,
      date
    };

    // utiliser la methode createCourse du apiHandler
    // en lui passant les infos
    // console.log(this.state);

    apiHandler
      .postCourse(course)
      .then(data => {
        console.log(data);
        this.props.history.push("/MyCourses");
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    // console.log(this.state);
    let price = 0;
    if (this.state.directions) {
      price = this.calculatePrice(this.state.directions.routes[0].distance);
    }
    let duration = 0;
    if (this.state.directions) {
      duration = this.displayDuration(this.state.directions.routes[0].duration);
    }
    let startAddress = "";
    if (this.state.directions) {
      startAddress = this.state.locationA.place_name;
    }
    let finishAddress = "";
    if (this.state.directions) {
      finishAddress = this.state.locationB.place_name;
    }
    const {redirection}=this.state;
    if (redirection){
      return <Redirect to="/myCourses"/>
    }
    // let steps = "No steps";
    // if (this.state.directions) {
    //   steps = this.state.directions.routes[0].legs[0].steps[0];
    // }
    return (
      <div className="all-map">
        <h1 className="price">{price.toFixed(2)} €</h1>
        <p className="label">Start</p>
        <div className="address">
          <Autocomplete id="start" onSelect={this.handleLocationA} />
        </div>

        <p className="label">Finish</p>
        <div className="address">
          <Autocomplete onSelect={this.handleLocationB} />
        </div>
        <div className="result">
          {this.state.directions && (
            <div>
              <div className="data-title">Duration: </div>
              <div className="data">{duration}</div>
            </div>
          )}
          {this.state.directions && (
            <div>
              <div className="data-title">Start address: </div>
              <div className="data">{startAddress}</div>
            </div>
          )}
          {this.state.directions && (
            <div>
              <div className="data-title">Finish address: </div>
              <div className="data">{finishAddress}</div>
            </div>
          )}
        </div>

        <div>
          <label className="label" htmlFor="date">
            Date:{" "}
          </label>
          <div className="address">
            <input
              className="input"
              type="date"
              id="date"
              name="date"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="driver">
          <p className="text">Drivers availables</p>
          <table className="table">
            
            {this.state.drivers.map((driver, index) => (
              <tbody key={index} className="table">
                <tr>
                  <td className="row">
                    <Link to={`/driver/${driver.id}`}>{driver.firstname}</Link>
                  </td>
                  <td className="row">
                    <Link to={`/driver/${driver.id}`}>{driver.lastname}</Link>
                  </td>
                  <td className="row">
                    <Link to={`/driver/${driver.id}`}>
                      <img src={driver.photo} alt="driver" />
                    </Link>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>

        <div className="choose input">
          <select
            onChange={this.handleChange}
            name="driverID"
            defaultValue="-1"
          >
            <option value="-1" disabled>
              Choose driver
            </option>
            {this.state.drivers.map(driver => (
              <option value={driver._id}>
                {driver.lastname}
                {driver.firstname}
              </option>
            ))}
          </select>
        </div>

        <div className="validate">
          <button onClick={this.createReservation} className="btn btn-4">
            Validate
          </button>
        </div>
        <div>
          <MapPlan />
        </div>
      </div>
    );
  }
}

export default withRouter(MapInfos);
