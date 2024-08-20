import React from "react";
import "./Client.css";
import logo from "../../assets/img/colorlib-logo.png";
import html from "../../assets/img/html5-logo.png";
import facebook from "../../assets/img/facebook-logo.png";
import adobe from "../../assets/img/adobe-logo.png";
import css from "../../assets/img/css-logo.png";

const Client = () => {
  return (
    <div>
      <div>
        <div className="client">
          <div>
            <div className="parentclient">
              <h4>our main client</h4>
            </div>
            <div className="logodiv">
              <div className="logo">
                <div>
                  <img src={logo} />
                </div>
                <div>
                  <img src={html} />
                </div>
                <div>
                  <img src={facebook} />
                </div>
                <div>
                  <img src={adobe} />
                </div>
                <div>
                  <img src={css} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
