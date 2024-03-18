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
import Screen254 from "../Screen254";
import Screen255 from "../Screen255";

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
      <Route index path="login" element={<Login />} />
      <Route path="choose-artists" element={<Screen251 />} />
      <Route path="hidden-player" element={<Screen248 />} />
      <Route path="buy-song-player" element={<Screen249 />} />
      <Route path="song-cart" element={<Screen250 />} />
      <Route path="purchased-song-player" element={<Screen254 />} />
      <Route path="purchased-song" element={<Screen255 />} />
    </Route>
  )
);

export default appRouter;
