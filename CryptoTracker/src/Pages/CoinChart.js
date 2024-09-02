import React, { useEffect, useState } from 'react';
import { HistoricalChart } from '../config/api';
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register the components
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const CoinChart = ({ Data }) => {
  const [historicData, setHistoricData] = useState([]); // Initialize as an empty array
  const [days, setDays] = useState(1);

  useEffect(() => {
    fetchData();
  }, [Data, days]);

  const fetchData = async () => {
    try {
      const response = await fetch(HistoricalChart(Data, days));
      const result = await response.json();
      setHistoricData(result.prices || []); // Ensure historicData is always an array
    } catch (error) {
      console.error('Error fetching the historical data:', error);
      setHistoricData([]); // In case of an error, set to an empty array
    }
  };

  if (!historicData || historicData.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div className="chart-container">
      <Line
        data={{
          labels: historicData.map((coin) => {
            let date = new Date(coin[0]);
            let time =
              date.getHours() > 12
                ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                : `${date.getHours()}:${date.getMinutes()} AM`;
            return days === 1 ? time : date.toLocaleDateString();
          }),
          datasets: [
            {
              data: historicData.map((coin) => coin[1]),
              label: `Price (Past ${days} Days)`,
              borderColor: '#EEBC1D',
            },
          ],
        }}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          elements: {
            point: {
              radius: 1,
            },
          },
        }}
      />
    </div>
  );
};

export default CoinChart;
