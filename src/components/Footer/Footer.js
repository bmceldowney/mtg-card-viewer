/**
 * Displays some extra info, like how many cards are loaded and who made
 * this thing
 */
import React from "react";
import "./Footer.css";

function Footer({ props: { totalCardCount, loadedCardCount } }) {
  return (
    <div className="footer">
      <span>Created by Ben McEldowney</span>
      <span className="count">
        {loadedCardCount} cards loaded of {totalCardCount} total cards
      </span>
    </div>
  );
}

export default Footer;
