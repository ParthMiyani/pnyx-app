// Screen255.js
import React from "react";
import "../styles/Screen250.css";
import tempImage from "./tempImage.webp";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function Screen255() {
  return (
    <>
      <div className="screenBackground">
        <div className="imgContainer">
          <img src={tempImage} alt="Temporary Song Art" />
        </div>
        <div className="content250">
          <p>
            98% of the primary market sale earnings will be awarded to the
            musican.
          </p>
          <h3>Offichain benefits</h3>
          <div className="description">
            <CheckCircleIcon style={{ color: "#e5cffe" }} />
            <p> VIP</p>
            <p className="subText">Token Holder</p>
          </div>
          <div className="description">
            <CheckCircleIcon style={{ color: "#e5cffe" }} />
            <p>Exclusive</p>
            <p className="subText">Drop & Events</p>
          </div>
        </div>
        <div className="buyButton">
          <div className="buyDetails">
            <div className="buyContent">
              <p className="buyHeading">Done</p>
              <p className="buySubContent">
                All the info is sent to your email
              </p>
            </div>
          </div>
          <button>Purchased</button>
        </div>
      </div>
    </>
  );
}

export default Screen255;
