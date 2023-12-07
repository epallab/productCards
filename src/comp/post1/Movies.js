import React from "react";
import CardItem from "./CardItem";
import open from "./open.jpg";
import anm from "./animal.avif";
import spd from "./spider.avif";

const Movies = () => {
  return (
    <>
      <CardItem
        title={"Oppenheimer"}
        categories={"Thriller/Thriller"}
        imgs={open}
        delayA={0}
      />
      <CardItem
        title={"Animal"}
        categories={"Action/Crime"}
        imgs={anm}
        delayA={0.1}
      />
      <CardItem
        title={"Spider-Man: No Way Home"}
        categories={"Action/Sci-fi"}
        imgs={spd}
        delayA={0.2}
      />
    </>
  );
};

export default Movies;
