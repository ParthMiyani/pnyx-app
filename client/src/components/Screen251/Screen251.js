import React from "react";
import "../../styles/Screen251.css";
import BackButton from './BackButton'; 
import ForwardButton from './ForwardButton'; 
import Searchbar from './Searchbar';

function Screen251 () {
    return (
        <div className="screen-container">
          <div className="header">
            <BackButton />
            <p>Choose some artists</p>
            <ForwardButton />
          </div>    
          <div className= "subheader">
            <p>
              Select a minimum of 1 artist, so we can generate a playlist for you.
            </p>
          </div>
          <div className = "searchbar">
            <Searchbar />
          </div>
        </div>
      );
    }
export default Screen251;