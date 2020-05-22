import React from "react";
import MapInfos from "../components/MapInfos";
import "../styles/home.css";
import { withUser } from "../components/Auth/withUser";
import { Link, } from "react-router-dom";

const Home = props => {
  console.log(props);
  // Implement react map box here.
  return (
    <div className="home">
      <h1>{props.context.user && <MapInfos />}</h1>

      {!props.context.user && (
        <div>
          <div className="textaccueil">Welcome on</div>
          <div className="textaccueil-karhaba">KARHABA</div>

          <div className="textaccueil">
            <Link className="link" to="/signin">
              Please Sign in!
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default withUser(Home);
