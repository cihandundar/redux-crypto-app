import ConnectingIcon from "assets/icons/ConnectingIcon";
import SecurityIcon from "assets/icons/SecurityIcon";
import TradeIcon from "assets/icons/TradeIcon";
import React from "react";

const Info = () => {
  return (
    <div className="info">
      <div className="info__container">
        <div className="info__container__box">
          <div className="info__container__box__icon">
            <SecurityIcon />
          </div>
          <div className="info__container__box__title">
            <h3>Most trusted security</h3>
          </div>
          <div className="info__container__box__text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              quibusdam ipsa accusamus fugiat dicta hic voluptatibus aliquam
              tempora assumenda neque.
            </p>
          </div>
        </div>
        <div className="info__container__box">
          <div className="info__container__box__icon">
            <ConnectingIcon />
          </div>
          <div className="info__container__box__title">
            <h3>Connecting across platforms</h3>
          </div>
          <div className="info__container__box__text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              quibusdam ipsa accusamus fugiat dicta hic voluptatibus aliquam
              tempora assumenda neque.
            </p>
          </div>
        </div>
        <div className="info__container__box">
          <div className="info__container__box__icon">
            <TradeIcon />
          </div>
          <div className="info__container__box__title">
            <h3>Trade at the lowest cost</h3>
          </div>
          <div className="info__container__box__text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              quibusdam ipsa accusamus fugiat dicta hic voluptatibus aliquam
              tempora assumenda neque.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
