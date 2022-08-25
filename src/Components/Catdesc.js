import React from "react";
import posterImage from "../Images/Category-desc-page.svg"
function Catdesc() {
  return (
    <>
      <div className="Catdes-section">
        <img src={posterImage} alt="" />
        <button className="Catdes-btn">Next</button>
        <p>
          BodyFirst Extreme Mass Gainer has been designed to help individuals
          gain lean muscle mass. It contains high quality calorie and protein
          sources along with creatine monohydrate, enzymes and vitamins and
          minerals, thereby providing complete nutrition.
        </p>
      </div>
    </>
  );
}

export default Catdesc;
