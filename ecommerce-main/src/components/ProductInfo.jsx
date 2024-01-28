import React from "react";
import classes from "../modules/Productinfo.module.scss";
import cart from "../assets/images/icon-cart.svg";

const Productinfo = (props) => {
  return (
    <>
      <div className={classes["info-div"]}>
        <div className={classes["product-title"]}>
          <h5>SNEAKER COMPANY</h5>
          <h1>
            Fall Limited Edition <br /> Sneakers
          </h1>
        </div>
        <div className={classes["product-description"]}>
          <p>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
        </div>
        <div className={classes["product-price"]}>
          <div className={classes["price-div"]}>
            <h1>$125.00</h1>
            <b className={classes["percent-div"]}>50%</b>
          </div>
          <div>
            <p className={classes['line-dotted']}>$250.00</p>
          </div>
        </div>
        <div className={classes["add-to-cart"]}>
          <div className={classes["quantity"]}>
            <button onClick={props.dicrimentHandler}>-</button>
            <h3>{props.productIncriment}</h3>
            <button onClick={props.incrimentHandler}>+</button>
          </div>
          <div
            className={classes["cart"]}
            onClick={() => {
              props.cartDisplayHandler(true);
            }}
          >
            <img src={cart} alt="" />
            <p>Add to cart</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Productinfo;
