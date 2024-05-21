import React from "react";
import MessageIcon from "../assets/images/mail.svg";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className="topbar">
      <Link to="/">
        <h1 className="topbar__title">Mail</h1>
      </Link>
      <div className="topbar__main">
        <Link to="/inbox">
          <div className="topbar__main__message">
            <img src={MessageIcon} alt="" />
            <span>{3}</span>
          </div>
        </Link>

        <p className="topbar__main__user">Adam Abdullahi A.</p>
      </div>
    </div>
  );
};

export default TopBar;
