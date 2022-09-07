import React, { useEffect, useState } from "react";
import { getQuestions } from "../actions/categoryAction"; 
import { useNavigate, useLocation } from "react-router-dom";
import products from "../Images/Descriptionproducts.png";
import { LazyLoadImage } from 'react-lazy-load-image-component';

import poster from "../Images/DescPoster.png";
import promot from "../Images/descpromoproduct.png";
import axios from "axios";
import Logo from "./Logo";
import Config from "../Config";
import { useDispatch } from "react-redux";
function Catdesc() {
  let dispatch=useDispatch()
  
  const navigate = useNavigate();
  const search = useLocation().search;
  const cat_id = new URLSearchParams(search).get('cat_id');
  const subcat_id = new URLSearchParams(search).get('subcat_id');
  const [catObj, setcatObj] = useState(null);
  const [subcatObj, setsubcatObj] = useState(null);
  useEffect(() => {
    try {
      (async () => {
        if (cat_id) {
          let { data } = await axios.get(`${Config.BASE_URL}${Config.GET_SPECIFIC_CATEGORY}${cat_id}`)
          console.log(data)
          setcatObj(data.data)
        }
        if (subcat_id) {
          let { data } = await axios.get(`${Config.BASE_URL}${Config.GET_SPECIFIC_SUB_CATEGORY}${subcat_id}`)
          console.log(data)
          setsubcatObj(data.data)
        }
      })();
    } catch (error) {
      console.log(error)
      alert(error.message)
    }

  }, []);

  async function handleClick() {
    try {
      if (cat_id) {
        await dispatch(getQuestions({cat_id,title:catObj.cat_name}))
      }
      if (subcat_id) {
        await dispatch(getQuestions({subcat_id,title:subcatObj.subcat_name}))
        
      }
      navigate("/form");
    } catch (error) {
      console.log(error)
      alert(error.message)
    }

  }
  return (
    <>
      {cat_id ?
        <div className="Catdes-section" data-aos="zoom-in">
          <div className="desc-products" >
            <Logo height={100} width={100} />
            <LazyLoadImage
              effect="blur"
              className="desc-product-image"
              src={catObj?.product_img ? catObj.product_img : products}
              alt=""
              
            />
          </div>
          <div className="desc-content">
            <button type="button" className="desc-button" onClick={handleClick} data-aos="fade-down">
              Next
            </button>
            <div className="desc-text-poster">
              <p > 
                {catObj?.cat_desc}
              </p>
              <LazyLoadImage
                effect="blur"
                width={300}
                height={300}
                src={catObj?.poster_img ? catObj.poster_img : poster}
                alt=""
                data-aos="zoom-in-up"
              />
            </div>
          </div>
          <div className="product-promotion ">
            <LazyLoadImage
              effect="blur"
              width={200}
              height={300}
              src={catObj?.promo_img ? catObj.promo_img : promot}
              alt=""
            />

            <div className="promote-it"   >
              <p>50+</p>
              <span>Product</span>
            </div>
            <div className="promote-it"  >
              <p>2000+</p>
              <span>Customer</span>
            </div>
            <div className="promote-it"  >
              <p>3000+</p>
              <span>Positive feedback</span>
            </div>
          </div>
        </div> : 
        
        <div className="Catdes-section">
        <div className="desc-products">
          <Logo height={100} width={100} />
          <LazyLoadImage
            effect="blur"
            className="desc-product-image"
            src={subcatObj?.product_img ? subcatObj.product_img : products}
            alt=""
          />
        </div>
        <div className="desc-content">
          <button type="button" className="desc-button" onClick={handleClick}>
            Next
          </button>
          <div className="desc-text-poster">
            <p>
              {subcatObj?.subcat_desc}
            </p>
            <LazyLoadImage
              effect="blur"
              className="desc-product-image"
              src={subcatObj?.poster_img ? subcatObj.poster_img : poster}
              alt=""
            />
          </div>
        </div>
        <div className="product-promotion ">
          <LazyLoadImage
          width={100}
            effect="blur"
            src={subcatObj?.promo_img ? subcatObj.promo_img : promot}
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
        }

    </>
  );
}

export default Catdesc;
