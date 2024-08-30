import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { SingleCoin } from '../config/api';
import './HomePage.css';

const CoinPage = () => {
  const { id } = useParams();
  const [coinData, setCoinData] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(SingleCoin + id);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const jsonData = await response.json();
      setCoinData(jsonData);
    } catch (error) {
      console.error('Error fetching the coin data:', error);
    }
  }, [id]); // Dependencies: id

  useEffect(() => {
    fetchData();
  }, [fetchData]); // Dependency array includes fetchData

  console.log(coinData);
  const description = coinData?.description?.en.split('.')[0] + '.';
  const formatCurrency = (value) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })
  .format(value)
  .replace("₹", "₹ "); // Adds a space after the ₹ symbol
};

  
  return (
    <div className='CoinPage'>
      <div className='CoinPage-left'>
        <img className='Coin-img' src={coinData?.image.large} alt={coinData?.name} />
        <h3 className='Coin-name'>{coinData?.name}</h3>
        <h6 className='Coin-des'>{description}</h6>
        <div className='Coin-detail'>
        <span className='Coin-rank'>
          <p className='Demand'>Rank:&nbsp;</p>
          <p className='Value'>{coinData?.market_cap_rank}</p>
        </span>
        <span className='Coin-currP'>
          <p className='Demand'>Current Price:&nbsp;</p>
          <p className='Value'>{formatCurrency(coinData?.market_data?.current_price?.inr)}</p>
          </span>
        <span className='Coin-marC'>
          <p className='Demand'>Market Cap:&nbsp;</p>
          <p className='Value'>
  {formatCurrency(Math.trunc(coinData?.market_data?.market_cap?.inr / 1000000))}M
</p>

         </span>
        </div>
        
      </div>
      <div className='CoinPage-right'>
        {/* Content for the right side */}
      </div>
    </div>
  );
};

export default CoinPage;
