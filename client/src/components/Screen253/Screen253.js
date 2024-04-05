import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/Screen253.css";
import cube from "./Cube.png";

function Screen253() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      // Simulate a click on the link after 3 seconds
      document.getElementById("hiddenPlayerLink").click();
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="screen-container">
      <Link to="/25-pnyx/hidden-player" id="hiddenPlayerLink" className="link-hidden">
        <div className="imgContainer253">
          <img src={cube} alt="Cube" />
        </div>
        <div className="loadingText">
          <p>
            Generating playlist <span className="dot-animation">...</span>
          </p>
        </div>
      </Link>
    </div>
  );
}

export default Screen253;