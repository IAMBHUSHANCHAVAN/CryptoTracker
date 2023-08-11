import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CryptoState } from "../../CryptoContext";
import Histogram from "./Histogram";

const Coinpage = () => {
  const [singledata, setSingledata] = useState();
  const { id } = useParams();
  // console.log("id", id);
  // const { symbol } = CryptoState();

  // const getSingleCoinData = async () => {
  //   const response = await fetch(
  //     `https://api.coingecko.com/api/v3/coins/${id}`
  //   );
  //   if (response.status === 200) {
  //     const data = await response.json();
  //     setSingledata(data);
  //     // console.log("data" , singledata.name);
  //   } else {
  //     console.log("Error fetching data from API");
  //   }
  // };

  // useEffect(() => {
  //   getSingleCoinData();
  // }, [singledata]);

  return (
    <div>
      <div className="container">
        {/* <div className="info">
          <div className="d-flex w-100 justify-content-center">
            <img src={singledata.image.large} alt="" srcset="" />
          </div>
          <h1 className="text-center">
            <span>{singledata.name}</span>
          </h1>
          <p>{singledata.description.en}</p>
          <h3>Rank - {singledata.market_cap_rank}</h3>
          <h3>
            Current Price - {singledata.market_data.current_price.inr} {symbol}
          </h3>
          <h3>Market Cap - {singledata.market_cap_rank}</h3>
        </div> */}
        <hr className="mt-5" />
        <div className="container mt-5 ">
          <h1 className="text-center" style={{ color: "gold" }}>
            Visualization Of Data
          </h1>
          <Histogram />
        </div>
      </div>
      );
    </div>
  );
};

export default Coinpage;
