import React, { useEffect, useState } from "react";
import { CoinList } from "../config/api";
import "./Carousel.css";
import TextField from "@mui/material/TextField";
const CoinsTable = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoding] = useState(false);

  const fetchDate = async () => {
    setLoding(true);
    const data = await fetch(CoinList);
    const json = await data.json();
    setCoins(json);
    setLoding(false);
    console.log(json);
  };

  useEffect(() => {
    fetchDate();
  }, []);

  return (
    <div className="CoinTable-BG">
      <div className="CoinTable-content">
        <h2 className="table-Des">Cryptocurrency Prices by Market Cap</h2>
        <TextField
          className="custom-textfield"
          label="Search"
          variant="outlined"
          margin="normal"
        />
        <div className="table-heading">
          <p>coin</p>
          <p>Price</p>
          <p>24h Change</p>
          <p>Market Cap</p>
        </div>
        <div className="table">
          {coins.map((coin, index) => {
            return ( 
              <div className="table-content" key = {coin.id}>
                <p>{coin.name}</p>
                <p>coin</p>
                <p>coin</p>
                <p>{coin.market_cap}</p>
                
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CoinsTable;
