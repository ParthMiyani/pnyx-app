// Screen250.js
import React from "react";
import "../styles/Screen250.css";
import tempImage from "./tempImage.webp";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link, useNavigate } from "react-router-dom";

function Screen250() {
  // const navigate = useNavigate();
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
              <p className="buyHeading">Ending In</p>
              <p className="buySubContent">8h 41m 2s</p>
            </div>
            <div className="buyContent">
              <p className="buyHeading">Quantity</p>
              <p className="buySubContent">44/50</p>
            </div>
            <div className="buyContent">
              <p className="buyHeading">Price</p>
              <p className="buySubContent">$108</p>
            </div>
          </div>
          <Link to={-1} state={{ key: true }}>
            <button>Buy This Song</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Screen250;
