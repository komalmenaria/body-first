import React from "react";
import products from "../Images/Descriptionproducts.png";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import poster from "../Images/DescPoster.png";
import promot from "../Images/descpromoproduct.png";

import Logo from "./Logo";

function Catdesc() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/form");
  }
  return (
    <>
      <div className="Catdes-section">
        <div className="desc-products">
          <Logo height={100} width={100} />
          <LazyLoadImage
            effect="blur"
            className="desc-product-image"
            src={products}
            alt=""
          />
        </div>
        <div className="desc-content">
          <button type="button" className="desc-button" onClick={handleClick}>
            Next
          </button>
          <div className="desc-text-poster">
            <p>
              BodyFirst® Extreme Mass Gainer has been designed to help
              individuals gain lean muscle mass. It contains high quality
              calorie and protein sources along with creatine monohydrate,
              enzymes and vitamins and minerals, thereby providing complete
              nutrition.
            </p>
            <LazyLoadImage
              effect="blur"
              className="desc-product-image"
              src={poster}
              alt=""
            />
          </div>

          <div className="product-promotion">
          <LazyLoadImage
            effect="blur"
            className="product-promotion-img"
            src={promot}
            alt=""
          />
          <div className="promote-it">
            <p>50+</p>
            <span>Product</span>
          </div>
          <div className="promote-it">
            <p>2000+</p>
            <span>Customer</span>
          </div>
          <div className="promote-it">
            <p>3000+</p>
            <span>Positive feedback</span>
          </div>
        </div>
        </div>
        
      </div>
    </>
  );
}

export default Catdesc;
