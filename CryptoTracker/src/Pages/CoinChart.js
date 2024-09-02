import React, { useEffect, useState } from 'react';
import { HistoricalChart } from '../config/api';
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register the components
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const CoinChart = ({ Data }) => {
  const [historicData, setHistoricData] = useState([]);
  const [days, setDays] = useState(1);

  useEffect(() => {
    fetchData();
  }, [Data, days]);

  const fetchData = async () => {
    const response = await fetch(HistoricalChart(Data, days));
    const result = await response.json();
    setHistoricData(result.prices);
  };

  return (
    <div>
      {historicData.length > 0 ? (
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
            elements: {
              point: {
                radius: 1,
              },
            },
          }}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CoinChart;
