import React, { useEffect, useState } from "react";
import "./Carousel.css";
import { TrendingCoins_URL } from "../config/api";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";

const Carousel = () => {
  const [coinData, setCoinData] = useState([]);

  useEffect(() => {
    fetchCoin();
  }, []);
  const fetchCoin = async () => {
    const data = await fetch(TrendingCoins_URL);
    const json = await data.json();
    setCoinData(json);
  };
  const handleError = (e) => {
    e.target.src =
      "https://coin-images.coingecko.com/coins/images/12171/large/polkadot.png?1696512008";
  };
  const items = coinData.map((coin) => {
    return (
      <div className="coin-price">
        <Link
                key={coin.id}
                to={"/CoinPage/" + coin.id}
                className="no-underline"
              >
        <img
          src={coin?.image}
          alt={coin?.name}
          height="80"
          onError={handleError}
        />
        <p>₹ {coin.current_price}</p>
        </Link>
      </div>
    );
  });
  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };
  return (
    <>
      <div className="carousel">
        <h1 className="header1">Crypto Hunter</h1>
        <div className="detail">
          Get all the Info regarding your favorite Crypto Currency
        </div>
        <div className="images-content">
          <AliceCarousel
            mouseTracking
            infinite
            autoPlayInterval={1000}
            animationDuration={1500}
            disableDotsControls
            disableButtonsControls
            responsive={responsive}
            autoPlay
            items={items}
          />
        </div>
      </div>
    </>
  );
};

export default Carousel;
