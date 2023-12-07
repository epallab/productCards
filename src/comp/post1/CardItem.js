import React from "react";
import "./Post.css";
import { motion } from "framer-motion";

const CardItem = (props) => {
  const initialStyles = {
    opacity: 0,
    y: 20,
  };

  const animatedStyles = {
    opacity: 1,
    y: 0,
  };
  return (
    <>
      <motion.div
        className="card-item"
        initial={initialStyles}
        animate={animatedStyles}
        transition={{ duration: 0.3, delay: props.delayA }}
      >
        <div className="item-details">
          <div>
            <img src={props.imgs} alt="" />
          </div>
          <div>
            <div className="item-title">{props.title}</div>
            <div className="item-categories">{props.categories}</div>
          </div>
        </div>
        <button className="exp">Explore</button>
      </motion.div>
    </>
  );
};

export default CardItem;
