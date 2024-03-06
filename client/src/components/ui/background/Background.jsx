import GridBackground from "./GridBackground";

const Background = () => {
  return (
    <div className="bg-grid">
      <div className="bg-grid-top">
        <GridBackground
          rotate={"180deg"}
          gridGradient="linear-gradient( #000 0%, #AA004F 100%)"
        />
      </div>
      <div className="bg-grid-bottom">
        <GridBackground
          rotate={"0deg"}
          gridGradient="linear-gradient( #000 0%, #7400DB 100%)"
        />
      </div>
    </div>
  );
};

export default Background;
