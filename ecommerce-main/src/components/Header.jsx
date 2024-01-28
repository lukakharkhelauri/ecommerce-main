import classes from "../modules/Header.module.scss";
import { useState, useEffect } from "react";
import avatarIcon from "../assets/images/image-avatar.png";
import cartIcon from "../assets/images/icon-cart.svg";
import deleteIcon from "../assets/images/icon-delete.svg";
import product1Icon from "../assets/images/image-product-1-thumbnail.jpg";
import menuIcon from "../assets/images/icon-menu.svg";
import closeIcon from "../assets/images/icon-close.svg";
const Header = (props) => {
  const [barToggles, setBarToggles] = useState(Array(8).fill(false));
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

  const barToggleHandler = (index) => {
    setBarToggles((prevToggle) => {
      const newToggle = [...prevToggle];
      newToggle[index] = !newToggle[index];
      return newToggle;
    });
  };

  return (
    <div className={classes["header-container"]}>
      {barToggles[7] && (
        <div className={classes["mobile-modal"]}>
          <img src={closeIcon} alt="" onClick={() => barToggleHandler(7)} />
          <p>Collections</p>
          <p>Men</p>
          <p>Women</p>
          <p>About</p>
          <p>Contact</p>
        </div>
      )}
      {barToggles[6] && (
        <div className={classes["cart-modal"]}>
          <div className={classes["cartModal-title"]}>
            <p>Cart</p>
          </div>
          {props.cartDisplay ? (
            <>
              <div className={classes["cartModal-info"]}>
                <div className={classes["cartModal-icondiv"]}>
                  <img src={product1Icon} alt="" />
                </div>
                <div className={classes["cartModal-textdiv"]}>
                  <p>Fall limited edition sneakers</p>
                  <p>
                    $125.00 x {props.productIncriment}
                    <span>{`$${125 * props.productIncriment}.00`}</span>
                  </p>
                </div>
                <div className={classes["cartModal-secondIcondiv"]}>
                  <img
                    src={deleteIcon}
                    alt=""
                    onClick={() => props.cartDisplayHandler(false)}
                  />
                </div>
              </div>
              <div className={classes["cartModal-btnBox"]}>
                <button>Checkout</button>
              </div>
            </>
          ) : (
            <h4 className={classes["empty"]}>Your Cart Is Empty</h4>
          )}
        </div>
      )}
      <div className={classes["header"]}>
        <div className={classes["header-left"]}>
          {windowWidth < 481 && (
            <>
              <img
                src={menuIcon}
                onClick={() => barToggleHandler(7)}
                className={classes["menu"]}
                alt=""
              />
            </>
          )}
          <h1 className={classes["header-title"]}>sneakers</h1>
          {windowWidth > 480 && (
            <div className={classes["header-textBox"]}>
              <div>
                <p
                  onMouseEnter={() => barToggleHandler(0)}
                  onMouseLeave={() => barToggleHandler(0)}
                >
                  Collections
                </p>
                {barToggles[0] && <span></span>}
              </div>
              <div>
                <p
                  onMouseEnter={() => barToggleHandler(1)}
                  onMouseLeave={() => barToggleHandler(1)}
                >
                  Men
                </p>
                {barToggles[1] && <span></span>}
              </div>
              <div>
                <p
                  onMouseEnter={() => barToggleHandler(2)}
                  onMouseLeave={() => barToggleHandler(2)}
                >
                  Women
                </p>
                {barToggles[2] && <span></span>}
              </div>
              <div>
                <p
                  onMouseEnter={() => barToggleHandler(3)}
                  onMouseLeave={() => barToggleHandler(3)}
                >
                  About
                </p>
                {barToggles[3] && <span></span>}
              </div>
              <div>
                <p
                  onMouseEnter={() => barToggleHandler(4)}
                  onMouseLeave={() => barToggleHandler(4)}
                >
                  Contact
                </p>
                {barToggles[4] && <span></span>}
              </div>
            </div>
          )}
        </div>
        <div className={classes["header-right"]}>
          <div className={classes["cart-box"]}>
            <img
              src={cartIcon}
              alt=""
              onClick={() => {
                barToggleHandler(6);
              }}
            />
            <div>{props.cartDisplay ? props.productIncriment : 0}</div>
          </div>
          <div className={classes["avatar-box"]}>
            <img
              src={avatarIcon}
              alt=""
              className={barToggles[5] ? classes["orange-bg"] : ""}
              onMouseEnter={() => barToggleHandler(5)}
              onMouseLeave={() => barToggleHandler(5)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
