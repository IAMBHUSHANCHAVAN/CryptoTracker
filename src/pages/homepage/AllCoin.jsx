import React, { useEffect, useState } from "react";
import { CryptoState } from "../../CryptoContext";
import { Link } from "react-router-dom";
import "./Table.css";

const AllCoin = () => {
    const [allcoin, setAllcoin] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const { currency ,symbol } = CryptoState();
  
    const FetchTrendingCoin = async () => {
      setLoading(true);
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
      );
      try {
        const data = await response.json();
        setLoading(false);
        setAllcoin(data);
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      FetchTrendingCoin();
    }, []);
  
    const handleSearch = (e) => {
      setSearch(e.target.value);
    };
  
    // Filter and paginate coins
    const filteredCoins = allcoin.filter((coin) =>{
    if(!coin){
        return false
    }
    else{
        return coin.name.toLowerCase().includes(search.toLowerCase()) 
    }
} 
    )

  return (
    <>
      <div className="container allcoin mt-5">
        <div className="text-center">
          <h1>
            <span className="fw-7">All Coins </span>
          </h1>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search Coin"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              onChange={handleSearch}
            />
          </div>
        </div>
        <div className="row">
        {filteredCoins.length === 0 ? (
          <h3 className="text-center">Coin not found please check again</h3>
        ) : (
          filteredCoins.map((curr) => {
            return (
              <div className="col-md mt-3" key={curr.id}>
                <div className="card border border-2" style={{ width: "15rem"}}>
                  <img src={curr.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title text-white">{curr.name}</h5>
                    <p className="card-text">
                      Last 24Hrs {curr.price_change_percentage_24h} 
                    </p>
                    <p className="card-text">Current Price {curr.current_price} {symbol}</p>
                    <Link to={`/coin/${curr.id}`}className="btn btn-primary">
                      visit Coin
                    </Link>
                  </div>
                </div>
              </div>
            );
          }))}
        </div>
        {/* <div className="pagination">
          {Array.from({ length: Math.ceil(filteredCoins.length / coinsPerPage) }).map((_, index) => (
            <button
              key={index}
              className={`pagination-btn ${currentPage === index + 1 ? "active" : ""}`}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div> */}
      </div>
    </>
  );
};

export default AllCoin;
