import React from "react";
import { Link } from "react-router-dom";
import Edit from "../components/img/Edit.png";
import Delete from "../components/img/Delete.png";
import Menu from "./Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/2018/May/5-Steps-to-Designing-an-Eye-Catching-Travel-Blog/DI_5-Steps-To-Designing-An-Eye-Catching-Travel-Blog_Banner_828x300.jpg" />
        <div className="user-info">
          <div className="user">
            <img src="https://img.freepik.com/premium-photo/women-asian-with-bright-backpack-looking-map_33718-1624.jpg" />
          </div>
          <div className="info">
            <h4>Sri Varsh</h4>
            <p>posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Tanah Lot Sunset: The Floating Temple Of Bali</h1>
        <p>
          The Tanah Lot temple (also known by its Indonesian name ‘Pura Tanah
          Lot’) dates back to the 16th century, when it was supposedly built by
          Dang Hyang Nirartha, the founder of the Shaivite priesthood in Bali.
          As the story goes, Nirartha was traveling along the south coast of
          Bali and spent a night on this picturesque rock in the sea. He was
          convinced it was a holy place for worshipping the Balinese sea gods,
          and had some local fishermen build a shrine on the rock. Thus the
          iconic Tanah Lot was born. The name roughly translates to ‘Land in the
          Sea,’ and it’s one of seven sea temples built along the coast of Bali.
          There are many myths and legends associated with Pura Tanah Lot, and
          the Hindus still consider it an important pilgrimage temple.
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
