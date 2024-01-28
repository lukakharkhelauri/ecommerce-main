import Header from "./components/Header";
import Pictures from "./components/Picture";
import PictureInCenter from "./components/PictureInCenter";
import Productinfo from "./components/ProductInfo";
import classes from "./modules/App.module.scss";
import { useState } from "react";

const App = () => {
  const [productIncriment, setProductIncriment] = useState(1);
  const [cartDisplay, setCartDisplay] = useState(true);
  const [showPicture, setShowPicture] = useState(false);

  const showPictureHandler = (value) => {
    setShowPicture(value);
  };


  const cartDisplayHandler = (action) => {  
    setCartDisplay(action);
  };

  const incrimentHandler = () => {
    setProductIncriment(productIncriment + 1);
  };

  const dicrimentHandler = () => {
    if (productIncriment > 1) {
      setProductIncriment(productIncriment - 1);
    } else {
      setProductIncriment(1);
    }
  };

  return (
    <div>
      <Header productIncriment={productIncriment} cartDisplayHandler={cartDisplayHandler} cartDisplay={cartDisplay}/>
      <div className={classes["layout-container"]}>
        <Pictures showPictureHandler={showPictureHandler}/>
        <Productinfo
          incrimentHandler={incrimentHandler}
          dicrimentHandler={dicrimentHandler}
          productIncriment={productIncriment}
          cartDisplayHandler={cartDisplayHandler}
        />
        {showPicture && <PictureInCenter showPictureHandler={showPictureHandler} />}
      </div>
    </div>
  );
};

export default App;
