import { HistoryChart } from "components";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCoinDetails } from "redux/coinSlice";

const CoinDetails = () => {
  const data = useSelector((state) => state?.coinReducer?.data);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoinDetails(id));
  }, [dispatch, id]);

  console.log(data);

  return (
    <div className="detail">
      <div className="detail__container">
        <div className="detail__wrapper">
          <div className="detail__container__box">
            <div className="detail__container__box__rank">
              <h4>#Rank: {data?.market_data?.market_cap_rank}</h4>
            </div>
            <div className="detail__container__box__title">
              <div className="detail__container__box__img">
                <img src={data?.image?.large} alt="" />
              </div>
              <h3>{data?.name}</h3>
              <span>{data?.symbol}</span>
            </div>
            <div className="detail__container__box__wrapper">
              <ul className="detail__container__box__list">
                <li
                  className={
                    data?.market_data?.price_change_percentage_24h < 0
                      ? `detail__container__box__link detail__container__box__link--down `
                      : `detail__container__box__link detail__container__box__link--up`
                  }
                >
                  <h3>24h</h3>
                  {data?.market_data?.price_change_percentage_24h}
                </li>
                <li
                  className={
                    data?.market_data?.price_change_percentage_7d < 0
                      ? `detail__container__box__link detail__container__box__link--down `
                      : `detail__container__box__link detail__container__box__link--up`
                  }
                >
                  <h3>7d</h3>
                  {data?.market_data?.price_change_percentage_7d}
                </li>
                <li
                  className={
                    data?.market_data?.price_change_percentage_14d < 0
                      ? `detail__container__box__link detail__container__box__link--down `
                      : `detail__container__box__link detail__container__box__link--up`
                  }
                >
                  <h3>14d</h3>
                  {data?.market_data?.price_change_percentage_14d}
                </li>
                <li
                  className={
                    data?.market_data?.price_change_percentage_30d < 0
                      ? `detail__container__box__link detail__container__box__link--down `
                      : `detail__container__box__link detail__container__box__link--up`
                  }
                >
                  <h3>30d</h3>
                  {data?.market_data?.price_change_percentage_30d}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="detail__text">
          <p dangerouslySetInnerHTML={{ __html: data?.description?.en }}></p>
        </div>
        <HistoryChart />
      </div>
    </div>
  );
};

export default CoinDetails;
