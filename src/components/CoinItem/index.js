import React, { useEffect } from "react";
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoinItem;
