import React from "react";
import Crypto from "../../assets/images/crypto.gif";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__container">
        <div className="hero__gif">
          <img src={Crypto} alt="" />
        </div>
        <div className="hero__text">
          <div className="hero__text__title">
            <h1>
              <span>Cryptoland Just Entered</span> the Real World
            </h1>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ipsam
            minus at illo, aliquam animi consequuntur commodi. Aliquid eveniet
            labore suscipit vel animi, esse exercitationem voluptates, est
            architecto ratione iste.
          </p>
          <div className="hero__text__btn">
            <div className="hero__text__btn__col left">
              <button>Buy Tokens 47% Off</button>
            </div>

            <div className="hero__text__btn__col">
              <button> White Pappers</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
