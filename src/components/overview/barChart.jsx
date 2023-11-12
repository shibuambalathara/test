import React, { useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    title: {
      display: true,
      text: 'Enrollment Analytics',
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const dataForJulyDec = {
  labels: [
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ],
  datasets: [
    {
      label: 'Product',
      data: [700, 699, 900, 800, 850, 800,700],
      borderColor: 'rgb(0, 0, 255)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      yAxisID: 'y',
    },
    {
      label: 'Marketing',
      data: [ 200, 150, 700, 900, 850, 800,300],
      borderColor: 'rgb(255, 255, 0)',
      backgroundColor: 'rgba(153, 162, 235, 0.5)',
      yAxisID: 'y',
    },
    {
      label: 'Sales',
      data: [200, 100, 150, 900, 700, 650,800],
      borderColor: 'rgb (255, 165, 0)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      yAxisID: 'y',
    },
    {
      label: 'Engineering',
      data: [200, 100, 150, 700, 650, 600,700],
      borderColor: 'rgb(255, 0, 0)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      yAxisID: 'y',
    },
  ],
};

const dataForJanJune = {
  labels: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    
  ],
  datasets: [
    {
      label: 'Product',
      data: [700, 699, 750, 900, 800, 850, 950],
      borderColor: 'rgb(0, 0, 255)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      yAxisID: 'y',
    },
    {
      label: 'Marketing',
      data: [100, 200, 150, 700, 900, 850, 800],
      borderColor: 'rgb(255, 255, 0)',
      backgroundColor: 'rgba(153, 162, 235, 0.5)',
      yAxisID: 'y',
    },
    {
      label: 'Sales',
      data: [200, 100, 150, 900, 700, 650, 600],
      borderColor: 'rgb (255, 165, 0)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      yAxisID: 'y',
    },
    {
      label: 'Engineering',
      data: [200, 100, 150, 900, 700, 650, 600],
      borderColor: 'rgb(255, 0, 0)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      yAxisID: 'y',
    },
  ],
};

export function BarChart() {
  const [timeRange, setTimeRange] = useState('dataForJanJune');

  let selectedData;

  switch (timeRange) {
    case 'dataForJanJune':
      selectedData = dataForJanJune;
      break;
    case 'dataForJulyDec':
      selectedData = dataForJulyDec;
      break;
    default:
      selectedData = dataForJanJune;
      break;
  }

  return (
    <div className='w-full'>
      <div className='flex justify-between '>
        <div className='font-bold'>Enrollment Analytics</div>
        <div className='border-2 rounded-md flex p-1'>
          <p className='text-gray-500'> Time period:</p>
          <select onChange={(e) => setTimeRange(e.target.value)} className='border-none'>
            <option value='dataForJanJune'>January-June</option>
            <option value='dataForJulyDec'>July-December</option>
          </select>
        </div>
      </div>
      <Bar options={options} data={selectedData} />
    </div>
  );
}
