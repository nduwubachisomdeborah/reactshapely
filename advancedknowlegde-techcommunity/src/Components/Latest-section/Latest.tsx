import React from "react";
import "./Latest.css";
import img from "../../assets/img/oneimageo.jpg";
import imgs from "../../assets/img/twoimagetwo.jpg";
import imgss from "../../assets/img/threeimage.jpg";
import imgsss from "../../assets/img/fourthimage.jpg";
import imgssss from "../../assets/img/oneimageo.jpg";
import image from "../../assets/img/twoimagetwo.jpg";
import images from "../../assets/img/threeimage.jpg";
import photo from "../../assets/img/fourthimage.jpg";
import photos from "../../assets/img/twoimagetwo.jpg";
import pics from "../../assets/img/fourthimage.jpg";
import picture from "../../assets/img/twoimagetwo.jpg";
import lastpics from "../../assets/img/threeimage.jpg";
const Latest = () => {
  return (
    <div>
      <div className="latestsection">
        <h2>OUR LATEST PROJECT</h2>
        <p>Here is our latest project you will love them!</p>
        <div className="photodiv">
          <div>
            <img src={img} />
            <p className="us">United States</p>
          </div>
          <div>
            <img src={imgs} />
            <p className="us">England</p>
          </div>
          <div>
            <img src={imgss} />
            <p className="us">Asia</p>
          </div>
          <div>
            <img src={imgsss} />
            <p className="us">China</p>
          </div>
          <div>
            <img src={imgssss} />
            <p className="us">Korea</p>
          </div>
          <div>
            <img src={image} />
            <p className="us">Dubai</p>
          </div>
          <div>
            <img src={images} />
            <p className="us">Malaysia</p>
          </div>
          <div>
            <img src={photo} />
            <p className="us">Austria</p>
          </div>
          <div>
            <img src={photos} />
            <p className="us">Canada</p>
          </div>
          <div>
            <img src={pics} />
            <p className="us">London</p>
          </div>
          <div>
            <img src={picture} />
            <p className="us">Santorini</p>
          </div>
          <div>
            <img src={lastpics} />
            <p className="us">Maldives</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Latest;
