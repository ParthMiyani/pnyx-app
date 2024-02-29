import Login from "./Login";
import { Outlet } from "react-router-dom";
import { useAddress } from "@thirdweb-dev/react";
import Screen251 from "./screen251/Screen251";

const Home = () => {
  const address = useAddress();
  return (
    <>
      {address ? (
        <>
          <Outlet />
        </>
      ) : (
        <>
          <Login />
        </>
      )}
    </>
  );
};

export default Home;
