import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CoinList } from "../config/api";
import "./Carousel.css";
import TextField from "@mui/material/TextField";
const CoinsTable = () => {
  const [coins, setCoins] = useState([]);
  const [searchCoin, setSearchCoin] = useState("");
  const fetchDate = async () => {
    const data = await fetch(CoinList);
    const json = await data.json();
    setCoins(json);
  };
  useEffect(() => {
    fetchDate();
  }, []);
  const filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(searchCoin.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(searchCoin.toLowerCase())
  );
  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(value);
  };

  return (
    <div className="CoinTable-BackGround">
      <div className="CoinTable-content">
        <h1 className="table-Des">Cryptocurrency Prices by Market Cap</h1>
        <TextField
          className="custom-textfield"
          label="Search For a Crypto Currency.."
          variant="outlined"
          margin="normal"
          value={searchCoin}
          onChange={(e) => {
            setSearchCoin(e.target.value);
          }}
        />
        <div className="whole-table">
        <div className="table-heading">
          <p className="heading1">coin</p>
          <p className="heading2">Price</p>
          <p className="heading2">24h Change</p>
          <p className="heading3">Market Cap</p>
        </div>
        <div className="table">
          {filteredCoins.map((coin, index) => {
            return (
              <Link
                key={coin.id}
                to={"/CoinPage/" + coin.id}
                className="no-underline"
              >
                <div className="table-content">
                  <div className="heading1">
                    <img src={coin?.image} alt={coin?.name} height="50px" />
                    <div className="heading1-content">
                      <span style={{ fontSize: "22px" }}>
                        {coin.symbol.toUpperCase()}
                      </span>
                      <span style={{ color: "darkgrey" }}>{coin.name}</span>
                    </div>
                  </div>
                  <p className="heading2">
                    {formatCurrency(coin.current_price)}
                  </p>
                  <p
                    className="heading2"
                    style={{
                      color:
                        coin.market_cap_change_percentage_24h > 0
                          ? "rgb(14, 203, 129)"
                          : "red",
                      fontWeight: 500,
                    }}
                  >
                    {coin.market_cap_change_percentage_24h.toFixed(2)}%
                  </p>
                  <p className="heading3">
                    {formatCurrency(coin.market_cap / 1000000)}M
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
        </div>
      </div>
    </div>
  );
};

export default CoinsTable;
