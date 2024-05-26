import { useEffect } from "react";
import { useLoaderData, useNavigate, Outlet } from "react-router-dom";
import { useAddress } from "@thirdweb-dev/react";
import { useReferedBy } from "../context/ReferedByProvider";

const Home = () => {
  const address = useAddress();
  const artist = useLoaderData();
  const { setReferedBy } = useReferedBy();
  const navigate = useNavigate();

  useEffect(() => {
    if (artist) {
      const { artistId } = artist;
      setReferedBy(artistId);
    } else {
      setReferedBy(null);
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
