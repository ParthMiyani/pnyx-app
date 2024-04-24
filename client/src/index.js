import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { UserIDProvider } from "./components/context/UserIDContext";
import { SonglistProvider } from "./components/context/SonglistContext";
import { SelectedSongProvider } from "./components/context/SelectedSongsContext";
import { ReferedByProvider } from "./components/context/referedByProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserIDProvider>
      <SonglistProvider>
        <SelectedSongProvider>
          <ReferedByProvider>
            <App />
          </ReferedByProvider>
        </SelectedSongProvider>
      </SonglistProvider>
    </UserIDProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
