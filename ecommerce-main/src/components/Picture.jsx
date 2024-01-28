import React, { useState, useEffect } from "react";
import classes from "../modules/Pictures.module.scss";
import firstImage from "../assets/images/image-product-1.jpg";
import secondImage from "../assets/images/image-product-2.jpg";
import thirdImage from "../assets/images/image-product-3.jpg";
import fourthImage from "../assets/images/image-product-4.jpg";
import img2 from "../assets/images/image-product-2.jpg";
import img3 from "../assets/images/image-product-3.jpg";
import img4 from "../assets/images/image-product-4.jpg";
import nextIcon from "../assets/images/icon-next.svg";

const Pictures = (props) => {
  const [picture, setPicture] = useState([firstImage, img2, img3, img4]);
  const [value, setValue] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const valueHandlerInc = () => {
    if (value < 3) {
      setValue(value + 1);
    }
  };

  const valueHandlerDec = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  const firstBtnHandler = () => {
    setValue(0);
  };

  const secondBtnHandler = () => {
    setValue(1);
  };

  const thirdBtnHandler = () => {
    setValue(2);
  };

  const fourthBtnHandler = () => {
    setValue(3);
  };

  return (
    <>
      <div className={classes["main"]}>
        <div className={classes["main-image"]}>
          <img
            src={nextIcon}
            className={classes["next-img"]}
            onClick={valueHandlerDec}
            style={{
              position: "relative",
              left: "70px",
              transform: "rotate(180deg)",
            }}
            alt=""
          />
          <img
            src={picture[value]}
            alt=""
            onClick={() => {
              windowWidth > 480 && props.showPictureHandler(true);
            }}
          />
          <img
            src={nextIcon}
            className={classes["next-img"]}
            onClick={valueHandlerInc}
            style={{ position: "relative", right: "70px" }}
            alt=""
          />
        </div>
        <div className={classes["images"]}>
          <img
            src={firstImage}
            alt="firstImage"
            onClick={firstBtnHandler}
            role="button"
          />
          <img
            src={secondImage}
            alt="secondImage"
            onClick={secondBtnHandler}
            role="button"
          />
          <img
            src={thirdImage}
            alt="thirdImage"
            onClick={thirdBtnHandler}
            role="button"
          />
          <img
            src={fourthImage}
            alt="fourthImage"
            onClick={fourthBtnHandler}
            role="button"
          />
        </div>
      </div>
    </>
  );
};

export default Pictures;
