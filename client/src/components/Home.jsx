import { useEffect } from "react";
import { useLoaderData, useNavigate, Outlet } from "react-router-dom";
import { useAddress } from "@thirdweb-dev/react";
import { useReferedBy } from "./context/referedByProvider";

const Home = () => {
  const address = useAddress();
  const artist = useLoaderData();
  const { setReferedBy } = useReferedBy();
  const navigate = useNavigate();

  useEffect(() => {
    if (artist) {
      const { artistId } = artist;
      setReferedBy(artistId);
    }
    address ? <>{navigate("/hidden-player")}</> : navigate("/login");
  }, [artist, setReferedBy, address, navigate]);

  return (
    <>
      <Outlet />
    </>
  );
};

export default Home;
