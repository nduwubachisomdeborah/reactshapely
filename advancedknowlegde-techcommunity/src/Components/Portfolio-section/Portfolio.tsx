import React from "react";
import "./Portfolio.css";
import img from "../../assets/img/photowork3.png";

const Portfolio = () => {
  return (
    <div>
      <div className="Portfolio-section">
        <div className="Portfolio-parentdiv">
          <div className="Portfolio-writeup">
            <h1>Portfolio Section</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              pulvinar luctus sem, eget porta orci. Maecenas molestie dui id
              diam feugiat, eu tincidunt mauris aliquam. Duis commodo vitae
              ligula et interdum.
            </p>
            <div className="Portfoliobutton">SEE IT IN ACTION</div>
          </div>
          <div className="Portfolioimg">
            <img src={img} className="img2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
