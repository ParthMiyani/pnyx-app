import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "../Home";
import LoginPage from "../pages/LoginPage";
import ChooseArtistsPage from "../pages/ChooseArtistsPage";
import HiddenPlayerPage from "../pages/HiddenPlayerPage";
import BuySongPlayerPage from "../pages/BuySongPlayerPage";
import SongCartPage from "../pages/SongCartPage";
import LoadingCubePage from "../pages/LoadingCubePage";
import PurchasedSongPlayerPage from "../pages/PurchasedSongPlayerPage";
import PurchasedSongPage from "../pages/PurchasedSongPage";
import { fetchArtist } from "../../api/fetchArtist";

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route
        path="refer/:artistId"
        element={<Home />}
        loader={async ({ params }) => {
          if (params.artistId) {
            const res = await fetchArtist(params.artistId);
            if (res) {
              return res;
            }
          }
          return null;
        }}
      />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/choose-artists" element={<ChooseArtistsPage />} />
      <Route path="/loading" element={<LoadingCubePage />} />
      <Route path="/hidden-player" element={<HiddenPlayerPage />} />
      <Route path="/buy-song-player" element={<BuySongPlayerPage />} />
      <Route path="/song-cart" element={<SongCartPage />} />
      <Route
        path="/purchased-song-player"
        element={<PurchasedSongPlayerPage />}
      />
      <Route path="/purchased-song" element={<PurchasedSongPage />} />
    </>
  )
);

export default appRouter;
