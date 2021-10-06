import React from "react";
import './menu-item.styles.scss';

const MenuItem=({title, imageUrl})=>(
    <div style={{
        backgroundImage: `url(${imageUrl})`,
        border: "1px solid red"
    
    }} className="menu-item">
    <div className="content">
      <h1 className="title">
        {title}
      </h1>
      <span className="subtitle">
          BUY NOW
      </span>
    </div>
  </div>
)

export default MenuItem;