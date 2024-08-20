import React from "react";
import "./Parallax.css";

const Parallax = () => {
  return (
    <div>
      {" "}
      <div className="smallparallaxsection">
        <div className="smallparallaxparentdiv">
          <div className="parallaxtext">Small Parallax Section</div>
          <p className="parallaxnote">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            imperdiet rhoncus porta. Ut quis sem quis purus lobortis dictum.
            Aliquam nec dignissim nisl. Vivamus cursus feugiat sapien, eget
            tincidunt leo ornare quis.
          </p>
          <div className="button1">MORE INFO</div>
        </div>
      </div>
    </div>
  );
};

export default Parallax;
