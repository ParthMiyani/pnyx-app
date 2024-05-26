import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { UserDataProvider } from "./context/UserDataContext";
import { SongListProvider } from "./context/SongListProvider";
import { SongDataProvider } from "./context/SongDataProvider";
import { ReferedByProvider } from "./context/ReferedByProvider";
import { CurrentSongProvider } from "./context/CurrentSongProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserDataProvider>
      <SongListProvider>
        <SongDataProvider>
          <ReferedByProvider>
            <CurrentSongProvider>
              <App />
            </CurrentSongProvider>
          </ReferedByProvider>
        </SongDataProvider>
      </SongListProvider>
    </UserDataProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
