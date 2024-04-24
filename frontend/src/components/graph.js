import React from 'react';
import { Bar } from 'react-chartjs-2';

const Graph = ({ data }) => {
    const chartData = {
        labels: data.map(item => item.dateTime),
        datasets: [
            {
                label: 'Steps',
                data: data.map(item => Number(item.value)),
                backgroundColor: 'rgb(75,192,192)',
            },
        ],
    };

    console.log('Chart Data:', chartData); // Debugging line

    return <Bar data={chartData} />;
};

export default Graph;