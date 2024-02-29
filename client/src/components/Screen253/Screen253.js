import React from "react";
import "../../styles/Screen253.css";
import cube from "./Cube.png";

function Screen253 () {
    return (
        <div className="screen-container">
          <div className="imgContainer253">
            <img src={cube} />
          </div>
          <div className= "loadingText">
            <p>Generating playlist ...</p>
          </div>
        </div>
      );
    }
export default Screen253;