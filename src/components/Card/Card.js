import React from "react";
import "./Card.css";

function Card({
  props: { name, artist, setName, originalType, imageUrl, state, id }
}) {
  const blankPlaceholder = <div className="card placeholder"></div>;
  const noImagePlaceholder = (
    <div className="flip-container">
      <div className="card">
        <span className="title first">{name}</span>
        <span className="set-name">{setName}</span>
        <span className="artist">{artist}</span>
        <div className="no-image-text">
          <span>No Image Available</span>
        </div>
      </div>
    </div>
  );

  const imageStyle = {
    backgroundImage: `url(${imageUrl})`
  };

  if (imageUrl === "placeholder") return blankPlaceholder;
  if (!imageUrl) return noImagePlaceholder;

  return (
    <div className={`flip-container ${state}`} key={id}>
      <div className="flipper">
        <div className="front">
          <div className="card">
            <div className="image" style={imageStyle}></div>
          </div>
        </div>
        <div className="back">
          <div className="card">
            <span className="title first">{name}</span>
            <span className="original-type">{originalType}</span>
            <span className="set-name">{setName}</span>
            <span className="artist">{artist}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
