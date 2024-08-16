import React, { useEffect, useState } from "react";
import { CoinList } from "../config/api";
import "./Carousel.css";
import TextField from "@mui/material/TextField";
const CoinsTable = () => {
  const [coins, setCoins] = useState([]);
  const fetchDate = async () => {
    const data = await fetch(CoinList);
    const json = await data.json();
    setCoins(json);
    console.log(json);
  };
  useEffect(() => {
    fetchDate();
  }, []);

  return (
    <div className="CoinTable-BackGround">
      <div className="CoinTable-content">
        <h2 className="table-Des">Cryptocurrency Prices by Market Cap</h2>
        <TextField
          className="custom-textfield"
          label="Search"
          variant="outlined"
          margin="normal"
        />
        <div className="table-heading">
          <p className="heading1">coin</p>
          <p className="heading2">Price</p>
          <p className="heading2">24h Change</p>
          <p className="heading3">Market Cap</p>
        </div>
        <div className="table">
          {coins.map((coin, index) => {
            return (
              <div className="table-content" key={coin.id}>
                <div className="heading1">
                  <img src={coin?.image} alt={coin?.name} height="50px" />
                  <div className="heading1-content">
                  <span style={{ fontSize: '22px' }}>{coin.symbol.toUpperCase()}</span>
                  <span style={{ color: "darkgrey" }}>{coin.name}</span>
                  </div>
                </div>
                <p className="heading2">{coin.current_price}</p>
                <p className="heading2" style={{color: coin.market_cap_change_percentage_24h>0 ? "rgb(14, 203, 129)" : "red", fontWeight:500}}>{coin.market_cap_change_percentage_24h.toFixed(2)}%</p>
                <p className="heading3">
                  ₹{(coin.market_cap / 1000000).toFixed(0)}M
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CoinsTable;
