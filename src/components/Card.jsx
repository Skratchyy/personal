import React from "react";
//
function Card({ img, title, desc }) {
  return (
    <div className="p-card" style={img ? { width: "30%" } : { width: "80%" }}>
      <div className="img">{img ? <img src={img} alt="" /> : <></>}</div>
      <div className={img ? "title" : "header"}>
        <p>{title}</p>
      </div>
      <div className="desc">
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default Card;
