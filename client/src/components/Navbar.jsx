import React from "react";
import { Link } from "react-router-dom";
import Logo from "./img/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="links">
          <Link className="link" to="/?cat=Destinations">
            <h6>Destinations</h6>
          </Link>
          <Link className="link" to="/?cat=Wild Life">
            <h6>Wild Life</h6>
          </Link>
          <Link className="link" to="/?cat=Bucket List">
            <h6>Bucket List</h6>
          </Link>
          <Link className="link" to="/?cat=Hike">
            <h6>Hike</h6>
          </Link>
          <Link className="link" to="/?cat=Beaches">
            <h6>Beaches</h6>
          </Link>
          <Link className="link" to="/?cat=food">
            <h6>Gallery</h6>
          </Link>
          <span>Sri Varsh</span>
          <span>Logout</span>
          <span className="write">
            <Link to="/write">Write</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
