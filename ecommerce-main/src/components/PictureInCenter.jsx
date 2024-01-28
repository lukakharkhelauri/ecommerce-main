import React from "react";
import classes from "../modules/PictureInCenter.module.scss";
import firstImg from "../assets/images/image-product-1-thumbnail.jpg";
import img2 from "../assets/images/image-product-2.jpg";
import secondImg from "../assets/images/image-product-2-thumbnail.jpg";
import img3 from "../assets/images/image-product-3.jpg";
import thirdImg from "../assets/images/image-product-3-thumbnail.jpg";
import img4 from "../assets/images/image-product-4.jpg";
import fourthImg from "../assets/images/image-product-4-thumbnail.jpg";
import defaultPic from "../assets/images/image-product-1.jpg";
import closeSVG from "../assets/images/icon-close.svg";
import nextIcon from "../assets/images/icon-next.svg";
import { useState } from "react";

const PictureInCenter = (props) => {
  const [defaultPicture, setDefaultPic] = useState(defaultPic);
  const [picture, setPicture] = useState([defaultPic, img2, img3, img4])
  const [value, setValue] = useState(0)

  const valueHandlerInc=()=>{
    if(value<3){
      setValue(value+1)
    }
  }

  const valueHandlerDec=()=>{
    if(value>0){
      setValue(value-1)
    }
  }


  const firstBtnHandler = () => {
    setValue(0)
  };

  const secondBtnHandler = () => {
    setValue(1)
  };

  const thirdBtnHandler = () => {
    setValue(2)
  };

  const fourthBtnHandler = () => {
    setValue(3)
  };

  return (
    <div className={classes["body"]}>
      <div className={classes["picture-div"]}>
        <div className={classes["cancel-btn"]}>
          <img
            src={closeSVG}
            alt=""
            onClick={() => props.showPictureHandler(false)}
          />
        </div>
        <div className={classes["default-picture"]}>
          <button className={classes['previous']} onClick={valueHandlerDec}>
            <img src={nextIcon} alt="" />
          </button>
          <img src={picture[value]} alt="" />
          <button onClick={valueHandlerInc} >
            <img src={nextIcon} alt=""/>
          </button>
        </div>
        <div className={classes["select-pictures"]}>
          <button onClick={firstBtnHandler}>
            <img src={firstImg} alt="" />
          </button>
          <button onClick={secondBtnHandler}>
            <img src={secondImg} alt="" />
          </button>
          <button onClick={thirdBtnHandler}>
            <img src={thirdImg} alt="" />
          </button>
          <button onClick={fourthBtnHandler}>
            <img src={fourthImg} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PictureInCenter;
