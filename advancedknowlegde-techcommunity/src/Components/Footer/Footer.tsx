import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="faq">
        <h1 className="h">Do you like this Awesome wordpress Theme?</h1>
        <div className="down">Download NOW</div>
      </div>

      <div className="foot">
        <h3>
          Theme by <a href="">colorlib</a> powered by <a href="">wordpress</a>
        </h3>

        <div className="A">
          <div>
            <i className="fa-brands fa-facebook"></i>
          </div>
          <div>
            <i className="fa-brands fa-twitter"></i>
          </div>
          <div>
            <i className="fa-brands fa-linkedin"></i>
          </div>
          <div>
            <i className="fa-brands fa-square-youtube"></i>
          </div>
          <div>
            <i className="fa-brands fa-instagram"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
