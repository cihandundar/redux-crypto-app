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

  return <div>CoinDetails</div>;
};

export default CoinDetails;
