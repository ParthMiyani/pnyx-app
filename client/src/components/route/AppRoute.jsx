import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "../Home";
import Login from "../login";
import Screen251 from "../Screen251/Screen251";
import Screen248 from "../Screen248";
import Screen249 from "../Screen249";
import Screen250 from "../Screen250";
import Screen253 from "../Screen253/Screen253"
import Screen254 from "../Screen254";
import Screen255 from "../Screen255";

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/25-pnyx" element={<Home />} />
    <Route index path="/25-pnyx/login" element={<Login />} />
    <Route path="/25-pnyx/choose-artists" element={<Screen251 />} />
    <Route path="/25-pnyx/generating-playlist" element={<Screen253 />} />
    <Route path="/25-pnyx/hidden-player" element={<Screen248 />} />
    <Route path="/25-pnyx/buy-song-player" element={<Screen249 />} />
    <Route path="/25-pnyx/song-cart" element={<Screen250 />} />
    <Route path="/25-pnyx/purchased-song-player" element={<Screen254 />} />
    <Route path="/25-pnyx/purchased-song" element={<Screen255 />} />
  </>
  )
);

export default appRouter;
