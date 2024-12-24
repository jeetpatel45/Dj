/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router";
const Header = () => {
  return (
    <header className="W-[1920px] h-[70px] flex justify-between main-header">
      <div className="p-2 text-center">
        <img className="main-img-logo" />
      </div>
      <div className="flex items-center space-x-4">
        <div className="vl"></div>
        <div className="flex ">
          <div className="flex items-center">
            <img className="h-12 w-12 rounded-full profilepic" />
          </div>
          <div className=" ">
            <div>
              <p>Mason Clark</p>
            </div>
            <div className="flex gap-3">
              <img className="dot" />
              <p>Online</p>
            </div>
          </div>
        </div>
        <div className="vl"></div>
        <div>
          <img className="bell" />
        </div>
        <div className="vl"></div>
        <Link to="/login">
          <img className="power" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
