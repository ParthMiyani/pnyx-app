import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Screen253.css";
import cube from "../assets/Cube.png";

function Screen253() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      console.log("timer done");
      navigate("/hidden-player");
    }, 3000);
  });

  return (
    <div className="screen-container">
      <div className="imgContainer253">
        <img src={cube} alt="Cube" />
      </div>
      <div className="loadingText">
        <p>
          Generating playlist <span className="dot-animation">...</span>
        </p>
      </div>
    </div>
  );
}

export default Screen253;
