import React from "react";
import ReactDOM from "react-dom";
import mapboxgl from "mapbox-gl";
import "../styles/map-plan.css";
import MapInfos from "./MapInfos";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

class MapPlan extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      // lng:coordinates[0]-1,
      // lat:coordinates[1]+1,
      lng: 2.333333,
      lat: 48.866667,
      zoom: 11,
      steps: [],
      directions:[]
    };
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v9",
      // center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
      center: [-122.486052, 37.830348]
    });

    // map.on("move", () => {
    //   this.setState({
    //     lng: map.getCenter().lng.toFixed(4),
    //     lat: map.getCenter().lat.toFixed(4),
    //     zoom: map.getZoom().toFixed(2)
    //   });
    // });

    map.on("load", function() {
      // console.log(this.state.props.directions);
      map.addSource("route", {
        type: "geojson",
        data: {
          type: "Feature",
          properties: {},
          geometry: {
            type: "LineString",
            coordinates: [
              [-122.48369693756104, 37.83381888486939],
              [-122.48348236083984, 37.83317489144141],
              [-122.48339653015138, 37.83270036637107],
              [-122.48356819152832, 37.832056363179625],
              [-122.48404026031496, 37.83114119107971],
              [-122.48404026031496, 37.83049717427869],
              [-122.48348236083984, 37.829920943955045],
              [-122.48356819152832, 37.82954808664175],
              [-122.48507022857666, 37.82944639795659],
              [-122.48610019683838, 37.82880236636284],
              [-122.48695850372314, 37.82931081282506],
              [-122.48700141906738, 37.83080223556934],
              [-122.48751640319824, 37.83168351665737],
              [-122.48803138732912, 37.832158048267786],
              [-122.48888969421387, 37.83297152392784],
              [-122.48987674713133, 37.83263257682617],
              [-122.49043464660643, 37.832937629287755],
              [-122.49125003814696, 37.832429207817725],
              [-122.49163627624512, 37.832564787218985],
              [-122.49223709106445, 37.83337825839438],
              [-122.49378204345702, 37.83368330777276]
            ]
          }
        }
      });
      map.addLayer({
        id: "route",
        type: "line",
        source: "route",
        layout: {
          "line-join": "round",
          "line-cap": "round"
        },
        paint: {
          "line-color": "#0BF5EB",
          "line-width": 6
        }
      });
    });
  }

  render() {
    return (
      <div>
        <div>
          <div></div>
          <div id="app"></div>
        </div>
        <div ref={el => (this.mapContainer = el)} className="mapContainer" />
      </div>
    );
  }
}

export default MapPlan;

// import React from "react";
// import ReactDOM from "react-dom";
// import mapboxgl from "mapbox-gl";
// import "../styles/map-plan.css"

// mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

// class MapPlan extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//         lng: 2.333333,
//         lat: 48.866667,
//         zoom: 11
//     };
//   }

//   componentDidMount() {
//     const map = new mapboxgl.Map({
//       container: this.mapContainer,
//       style: "mapbox://styles/mapbox/streets-v9",
//       center: [this.state.lng, this.state.lat],
//       zoom: this.state.zoom
//     });

//     map.on("move", () => {
//       this.setState({
//         lng: map.getCenter().lng.toFixed(4),
//         lat: map.getCenter().lat.toFixed(4),
//         zoom: map.getZoom().toFixed(2)
//       });
//     });
//   }

//   render() {
//     return (
//       <div >
//         <div >
//           <div>

//           </div>
//           <div id="app"></div>
//         </div>
//         <div ref={el => (this.mapContainer = el)} className="mapContainer" />
//       </div>
//     );
//   }
// }

// export default MapPlan;
