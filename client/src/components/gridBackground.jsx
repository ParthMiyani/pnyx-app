import React from "react";
import "./gridBackground.css";

const GridBackground = (props) => {
  //   let count = 0;
  //   let width = "0px";
  //   let height = "0px";
  return (
    <div className="perent" style={{ rotate: props.rotate }}>
      <div
        className="grid-container"
        style={{ background: props.gridGradient }}
      >
        {[...Array(100)].map((_, index) => {
          return <div key={index} className="grid-cell"></div>;
        })}
      </div>
    </div>
  );
};

export default GridBackground;
