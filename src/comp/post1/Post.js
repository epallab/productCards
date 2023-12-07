import React, { useState } from "react";
import "./Post.css";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { IoGameControllerOutline } from "react-icons/io5";
import { LiaBookSolid } from "react-icons/lia";
import { MdMovieEdit } from "react-icons/md";
import Games from "./Games";
import Movies from "./Movies";
import Books from "./Books";
const Post = () => {
  const [toggle, setToggle] = useState(0);
  return (
    <>
      <div className="main-container">
        <div className="card">
          <div className="title">
            <div>
              <FaMoneyBillTrendUp />
            </div>
            <div>Trending</div>
          </div>
          <div className="tabs">
            <button
              className={toggle === 0 ? "tab-btn active" : "tab-btn"}
              onClick={() => setToggle(0)}
            >
              <div>
                <IoGameControllerOutline />
              </div>
              <div>Games</div>
            </button>
            <button
              className={toggle === 1 ? "tab-btn active" : "tab-btn"}
              onClick={() => setToggle(1)}
            >
              <div>
                <MdMovieEdit />
              </div>
              <div>Movies</div>
            </button>
            <button
              className={toggle === 2 ? "tab-btn active" : "tab-btn"}
              onClick={() => setToggle(2)}
            >
              <div>
                <LiaBookSolid />
              </div>
              <div>Books</div>
            </button>
          </div>
          <div className="item-container">
            {toggle === 0 ? <Games /> : null}
            {toggle === 1 ? <Movies /> : null}
            {toggle === 2 ? <Books /> : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
