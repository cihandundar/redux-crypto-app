import StarIcon from "assets/icons/StarIcon";
import Popup from "components/Popup";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCoin } from "redux/coinSlice";

const CoinItem = () => {
  const data = useSelector((state) => state?.coinReducer?.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoin());
  }, [dispatch]);

  console.log(data);
  const [login, setLogin] = useState(false);

  const toggleLogin = () => {
    setLogin(!login);
  };

  if (login) {
    document.body.classList.add("active-login");
  } else {
    document.body.classList.remove("active-login");
  }

  return (
    <div className="item">
      <div className="item__container">
        {data?.map((item) => (
          <div className="item__container__box" key={item?.id}>
            <div className="item__container__box__img">
              <img src={item?.image} alt="" />
            </div>
            <div className="item__container__box__title">
              <h2>{item?.name}</h2>
              <span>{item?.symbol}</span>
            </div>
            <Link to={`/coin/${item?.id}`}>
              <button>View details</button>
            </Link>
            <span onClick={toggleLogin} className="favorites">
              <StarIcon />
            </span>
          </div>
        ))}
        {login && (
          <div className="popup">
            <div className="popup__container"></div>
            <div className="popup__content">
              <Popup />
              <button className="popup__close" onClick={toggleLogin}>
                X
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoinItem;
