import React from "react";
import CardItem from "./CardItem";
import gta from "./gtaVi.jpg";
import avt from "./avatar.avif";
import bld from "./bloodWest.webp";

const Games = () => {
  return (
    <>
      <CardItem
        title={"Grand Theft Auto VI"}
        categories={"Action/Open World"}
        imgs={gta}
        delayA={0}
      />
      <CardItem
        title={"Avatar: Frontiers of Pandora"}
        categories={"Action-adventure/Open World"}
        imgs={avt}
        delayA={0.1}
      />
      <CardItem
        title={"Blood West"}
        categories={"First-person shooter"}
        imgs={bld}
        delayA={0.2}
      />
    </>
  );
};

export default Games;
