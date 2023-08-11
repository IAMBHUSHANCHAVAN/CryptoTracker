import React, { useEffect, useState } from "react";
import "./Table.css";
import axios from "axios";
// import { TrendingCoins } from "../config/api";
import { CryptoState } from "../../CryptoContext";
import { Link } from "react-router-dom";

const Trending = () => {
  const [trending, setTrending] = useState([]);
  const { currency } = CryptoState();
  console.log("currency", currency);
  const FetchTrendingCoin = async () => {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`
    );
    try {
      const data = await response.json();
      console.log("we get", data);
      setTrending(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    FetchTrendingCoin();
    console.log("data", trending);
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center">
        <span>Top 10</span>
      </h1>
      <div className="row mt-3">
        {trending.map((coin) => {
          return (
            <div className="col">
              <div className="card mt-5" style={{ width: "15rem" }}>
                <img src={coin.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title text-white">{coin.name}</h5>
                  <p className="card-text">
                    {coin.price_change_percentage_24h} %
                  </p>
                  <Link to={`/coinpage/${coin.id}`}>
                    <button className="btn btn-danger">visit coin</button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Trending;
