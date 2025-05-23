import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const posts = [
    {
      id: 1,
      title: "Tent Camping",
      desc: "Tent Camping",
      img: "https://bynekaadu.com/wp-content/uploads/2024/02/Challenges-in-Tent-Camping.png",
    },
    {
      id: 2,
      title: "Mountain Hiking",
      desc: "Mountain Hiking",
      img: "https://media2.thrillophilia.com/images/photos/000/165/362/original/1624590633_Bukit_Batok_Hill.jpg?w=753&h=450&dpr=1.5",
    },
    {
      id: 3,
      title: "Rafting",
      desc: "Rafting",
      img: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0b/d7/48/b1.jpg",
    },
    {
      id: 4,
      title: "Scuba Diving",
      desc: "Scuba Diving",
      img: "https://res.cloudinary.com/manawa/image/upload/f_auto,c_limit,w_3840,q_auto/articles/most-beautiful-spots-for-your-first-scuba-dive/61396758347_kwukov",
    },
  ];
  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link className="link" to={"/post/${post.id}"}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
