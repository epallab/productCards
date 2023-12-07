import React from "react";
import CardItem from "./CardItem";
import rgt from "./right.jpg";
import oath from "./oath.jpg";
import thn from "./things.jpg";

const Books = () => {
  return (
    <>
      <CardItem
        title={"Right Man, Right Time"}
        categories={"Book by Meghan Quinn"}
        imgs={rgt}
        delayA={0}
      />
      <CardItem
        title={"Oath and Honor"}
        categories={"Book by Liz Cheney"}
        imgs={oath}
        delayA={0.1}
      />
      <CardItem
        title={"Things We Never Got Over"}
        categories={"Book by Lucy Score"}
        imgs={thn}
        delayA={0.2}
      />
    </>
  );
};

export default Books;
