import React from 'react';
import { Bar } from 'react-chartjs-2';
import { CategoryScale} from "chart.js";
import Chart from 'chart.js/auto';
Chart.register(CategoryScale)

// import { Chart, registerables } from 'chart.js';
// Chart.register(...registerables);


const Graph = ({ data, label }) => {
    // If data is not an array, return null
    if (!Array.isArray(data)) {
        return null;
    }

    const chartData = {
        labels: data.map((item) => item.dateTime),
        datasets: [
            {
                label: label,
                data: data.map((item) => Number(item.value)),
                backgroundColor: 'rgb(255,79,79)',
                
            },
        ],
    };

    const options = {
        plugins: {
          legend: {
            display: false,
          },
        },
      };

    console.log('Chart Data:', chartData); // Debugging line

    return <Bar data={chartData} options={options}/>;
};

export default Graph;