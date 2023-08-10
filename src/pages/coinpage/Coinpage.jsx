import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CryptoState } from "../../CryptoContext";
import Histogram from "./Histogram";

const Coinpage = () => {
  const [singledata ,setSingledata] = useState()
  const {id} = useParams()
 const {symbol} = CryptoState()
  const singleCoinDetail =  async()=>{
    const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
    try {
      const data = await response.json()
     setSingledata(data);
      console.log("datda" , singledata.name);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    singleCoinDetail()
  },[id])
  
  return (
    <div>
      <div className="container">
          <div className="info">
          <div className="d-flex w-100 justify-content-center">
          <img src={singledata.image.large} alt="" srcset="" />
          </div>
          <h1 className="text-center">
            <span>{singledata.name}</span>
          </h1>
          <p>
          {singledata.description.en}
          </p>
          <h3>Rank - {singledata.market_cap_rank}</h3>
          <h3>Current Price - {singledata.market_data.current_price.inr} {symbol}</h3>
          <h3>Market Cap - {singledata.market_cap_rank}</h3>
        </div>
        <hr className="mt-5" />
        <div className="container mt-5 ">
          <h1 className="text-center" style={{color:"gold"}}>Visualization Of Data</h1>
        <Histogram/>
        </div>
        </div>
  
      // </div>
  );
};

export default Coinpage;
