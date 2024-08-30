export const CoinList = 
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false";

export const SingleCoin = 
    `https://api.coingecko.com/api/v3/coins/`;

export const HistoricalChart = (id, days = 365) =>
    `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=INR&days=${days}`;

export const TrendingCoins_URL = 
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`;
