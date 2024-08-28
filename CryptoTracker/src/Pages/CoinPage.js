import React, { useEffect, useState } from 'react'
import { json, useParams } from 'react-router-dom'
import { SingleCoin } from '../config/api';
const CoinPage = () => {
  const { id } = useParams();
  const [coinData, setCoinData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []); // Added id as a dependency

  const fetchData = async () => {
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
  };

  console.log(coinData);

  return (
    <div>
      {coinData ? (
        <div>
          <h1>{coinData.name}</h1>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CoinPage;