import Login from "./Login";
import { useOutlet } from "react-router-dom";
import { useAddress } from "@thirdweb-dev/react";
import Screen248 from "./Screen248";

const Home = () => {
  const address = useAddress();
  const outlet = useOutlet();
  return (
    <>
      {address ? (
        <>{outlet || <Screen248 />}</>
      ) : (
        <>
          <Login />
        </>
      )}
    </>
  );
};

export default Home;
