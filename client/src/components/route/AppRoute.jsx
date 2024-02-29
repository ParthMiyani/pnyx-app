import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "../Home";
import Login from "../Login";
import Screen251 from "../screen251/Screen251";
import Screen248 from "../Screen248";

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
      <Route index path="login" element={<Login />} />
      <Route path="choose-artists" element={<Screen251 />} />
      <Route path="hidden-player" element={<Screen248 />} />
    </Route>
  )
);

export default appRouter;
