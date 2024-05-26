import React, { useState, useEffect } from "react";
import "../../styles/songCartPage.css";
import tempImage from "../../assets/tempImage.webp";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link } from "react-router-dom";
// import { useSelectedSong } from "../../context/selectedArtistProvider";

export default function SongCartPage() {
  // const { selectedSong } = useSelectedSong();
  // const [timer, setTimer] = useState(selectedSong.timeLeft);
  const [isTimerExpired, setIsTimerExpired] = useState(false);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const [hours, minutes, seconds] = timer.split(":").map(Number);

  //     let remainingHours = hours;
  //     let remainingMinutes = minutes;
  //     let remainingSeconds = seconds;

  //     remainingSeconds--;

  //     if (remainingSeconds < 0) {
  //       remainingSeconds = 59;
  //       remainingMinutes--;

  //       if (remainingMinutes < 0) {
  //         remainingMinutes = 59;
  //         remainingHours--;

  //         if (remainingHours < 0) {
  //           clearInterval(interval);
  //           setTimer("00:00:00");
  //           setIsTimerExpired(true);
  //           return;
  //         }
  //       }
  //     }

  //     const formattedHours = String(remainingHours).padStart(2, "0");
  //     const formattedMinutes = String(remainingMinutes).padStart(2, "0");
  //     const formattedSeconds = String(remainingSeconds).padStart(2, "0");

  //     const formattedTime = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  //     setTimer(formattedTime);
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, [timer]);

  const price = "20";

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
          {/* TODO: i think it should be off-chain, right? */}
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
              <p className="buySubContent">{"8h 10m"}</p>
            </div>
            <div className="buyContent">
              <p className="buyHeading">Quantity</p>
              <p className="buySubContent">44/50</p>
            </div>
            <div className="buyContent">
              <p className="buyHeading">Price</p>
              <p className="buySubContent">${price}</p>
            </div>
          </div>
          <Link
            to={"/purchased-song-player"}
            state={{ key: true }}
            onClick={(e) => {
              if (isTimerExpired) e.preventDefault(); // prevent link navigation if timer is expired
            }}
          >
            <button disabled={isTimerExpired}>Buy This Song</button>
          </Link>
        </div>
      </div>
    </>
  );
}
