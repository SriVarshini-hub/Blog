import React from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/2018/May/5-Steps-to-Designing-an-Eye-Catching-Travel-Blog/DI_5-Steps-To-Designing-An-Eye-Catching-Travel-Blog_Banner_828x300.jpg" />
        <div className="user">
          <img src="https://img.freepik.com/premium-photo/women-asian-with-bright-backpack-looking-map_33718-1624.jpg" />
        </div>
        <div className="info">
          <span>Jenny</span>
          <p>posted 2 days ago</p>
        </div>
        <div className="edit">
          <Link to={`/write?edit=2`}>
            <img src={Edit} alt="" />
          </Link>

          <img src={Delete} alt="" />
        </div>
      </div>
      <div className="menu">m</div>
    </div>
  );
};

export default Single;
