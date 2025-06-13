import React from "react";

const Menu = () => {
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
    <div className="menu">
      <h1>Other posts you may like</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img alt="" src={post.img} />
          <h1>{post.title}</h1>
          <button>Read More</button>
        </div>
      ))}
    </div>
  );
};

export default Menu;
