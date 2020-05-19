import React from "react";
import Autocomplete from "./Autocomplete";
import axios from "axios";
import apiHandler from "../api/apiHandler.js";
import { Link, withRouter } from "react-router-dom";

class MapInfos extends React.Component {
  state = {
    locationA: null,
    locationB: null,
    directions: null,
    distance: null,
    price: 0,
    duration: 0,
    date: null,
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
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

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
        this.props.history.push("/");
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
    if (price !== 0) {
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
    return (
      <div>
        <h1>{price.toFixed(2)} €</h1>
        Start
        <Autocomplete onSelect={this.handleLocationA} />
        Finish
        <Autocomplete onSelect={this.handleLocationB} />
        {this.state.directions && <h1> Duration:{duration}</h1>}
        {this.state.directions && <h1> Start address: {startAddress}</h1>}
        {this.state.directions && <h1> Finish address: {finishAddress}</h1>}
        <div>
          <label htmlFor="date">Date: </label>
          <input
            type="date"
            id="date"
            name="date"
            onChange={this.handleChange}
          />
        </div>
        <div>
          {this.state.drivers.map((driver, index) => (
            <p key={index}>
              {driver.name}
              <Link to={`/driver/${driver.id}`}>
                {driver.lastname} {driver.firstname} See more
              </Link>
            </p>
          ))}
          Faire un select dont les options sont un map sur this.state.drivers
        </div>
        <select onChange={this.handleChange} name="driverID" defaultValue="-1">
          <option value="-1" disabled>
            Choose your driver
          </option>
          {this.state.drivers.map(driver => (
            <option value={driver._id}>
              {driver.firstname} {driver.lastname}
            </option>
          ))}
        </select>
        <button onClick={this.createReservation}>Validate</button>
      </div>
    );
  }
}

export default withRouter(MapInfos);
