import React from "react";
import { Link } from "react-router-dom";

function Title({ title, width, url }) {
  return (
    <div className="heading">
      <h3>
        <span>#</span>
        {title}
        <div style={{ width: width }} />
      </h3>
      <div className="link">
        <Link className="view-more" to={url}>
          view all
        </Link>
      </div>
    </div>
  );
}

export default Title;
