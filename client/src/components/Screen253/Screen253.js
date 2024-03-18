import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Screen253.css";
import cube from "./Cube.png";

function Screen253 () {
    return (
        <Link to="/hidden-player" className="screen-container">
          <div className="imgContainer253">
            <img src={cube} />
          </div>
          <div className= "loadingText">
             <p>Generating playlist <span className="dot-animation">...</span></p>
          </div>
        </Link>
      );
    }
export default Screen253;