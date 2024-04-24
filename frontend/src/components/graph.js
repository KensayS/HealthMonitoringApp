import React from 'react';
import { Bar } from 'react-chartjs-2';
import { CategoryScale} from "chart.js";
import Chart from 'chart.js/auto';
Chart.register(CategoryScale)

// import { Chart, registerables } from 'chart.js';
// Chart.register(...registerables);


const Graph = ({ data }) => {
    // If data is not an array, return null
    if (!Array.isArray(data)) {
        return null;
    }

    const chartData = {
        labels: data.map((item) => item.dateTime),
        datasets: [
            {
                label: 'Steps',
                data: data.map((item) => Number(item.value)),
                backgroundColor: 'rgb(75,192,192)',
            },
        ],
    };

    console.log('Chart Data:', chartData); // Debugging line

    return <Bar data={chartData} />;
};

export default Graph;