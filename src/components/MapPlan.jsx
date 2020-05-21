import React from "react";
import ReactDOM from "react-dom";
import mapboxgl from "mapbox-gl";
import "../styles/map-plan.css"

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

class MapPlan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        lng: 2.333333,
        lat: 48.866667,
        zoom: 11
    };
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v9",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });

    map.on("move", () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });
  }

  render() {
    return (
      <div >
        <div >
          <div>
            
          </div>
          <div id="app"></div>
        </div>
        <div ref={el => (this.mapContainer = el)} className="mapContainer" />
      </div>
    );
  }
}

export default MapPlan;
