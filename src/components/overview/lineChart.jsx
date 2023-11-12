import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
     
    },
  },
  scales: {
    y: {
      type: 'linear',
      display: true,
      position: 'left',
    },
  },
};

const labelsForWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];


const dataForToday = {
  labels: ['Today'],
  datasets: [
    {
      label: 'Onetime',
      data: [700],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      yAxisID: 'y',
    },
    {
      label: 'Late',
      data: [100],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(153, 162, 235, 0.5)',
      yAxisID: 'y',
    },
    {
      label: 'Absent',
      data: [200],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      yAxisID: 'y',
    },
  ],
};

const dataForThisWeek = {
  labels: labelsForWeek,
  datasets: [
    {
      label: 'Onetime',
      data: [700, 699, 750, 900, 800],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      yAxisID: 'y',
    },
    {
      label: 'Late',
      data: [100, 200, 150, 700, 900],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(153, 162, 235, 0.5)',
      yAxisID: 'y',
    },
    {
      label: 'Absent',
      data: [200, 100, 150, 900, 700],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      yAxisID: 'y',
    },
  ],
};

const dataForThisMonth = {
  labels: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
  ],
  datasets: [
    {
      label: 'Onetime',
      data: [700, 699, 750, 900, 800, 850, 950],
      borderColor: 'rgb(0,255,0)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      yAxisID: 'y',
    },
    {
      label: 'Late',
      data: [100, 200, 150, 700, 900, 850, 800],
      borderColor: 'rgb(255,255,0)',
      backgroundColor: 'rgba(153, 162, 235, 0.5)',
      yAxisID: 'y',
    },
    {
      label: 'Absent',
      data: [200, 100, 150, 900, 700, 650, 600],
      borderColor: 'rgb(255,0,0)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      yAxisID: 'y',
    },
  ],
};

export function LineChart() {
  const [timeRange,setTimeRange]=useState('thisMonth')
  let selectedData;

  switch (timeRange) {
    case 'today':
      selectedData = dataForToday;
      break;
    case 'thisWeek':
      selectedData = dataForThisWeek;
      break;
    case 'thisMonth':
      selectedData = dataForThisMonth;
      break;
    default:
      selectedData = dataForThisWeek;
      break;
  }

  return (
    <div className='w-full'>
    <div className='flex justify-between'>
      <div className='font-bold'>Employee Attendance</div>
      <div className='border-2 rounded-md'>
        {timeRangeValues.map((item, index) => (
          <button
            key={index}
            onClick={() => setTimeRange(item.value)}
            className={`text-sm px-2 py-1 ${
              timeRange === item.value ? 'border-2 bg-gray-200' : 'rounded-md'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
    <Line options={options} data={selectedData} />
  </div>
  );
}

const timeRangeValues=[
  {label:'Today',value:'today'},
  {label:'This Week',value:'thisWeek'},
  {label:'This Month',value:'thisMonth'}
]
