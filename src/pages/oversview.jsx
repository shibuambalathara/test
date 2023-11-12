import React ,{useMemo}from 'react'
import OverAllData from '../components/overview/overAllData'
import { LineChart } from '../components/overview/lineChart'
import { BarChart } from '../components/overview/barChart'
import TableComponent from '../components/table/table'
import { tableData } from '../utils/tableData'
import { AiOutlineEllipsis } from "react-icons/ai";

const Overview = () => {
  const columns=useMemo(
    () =>[
     
      {Header:'Candidate',accessor :'candidate'},
      {Header:'Vaccancy',accessor :'vaccancy'},
      {Header:'Contact',accessor :'contact'},
      {Header:'Experience',accessor :'experience'},
      {Header:'matchScore',accessor :'matchScore'},
      
     
 {Header:'Action',  Cell: ({ row }) => (<button  className='rounded-full border-2 border-gray-100' > <AiOutlineEllipsis /></button>)},

    ],[])
  return (
    <div className='w-full space-y-2'>
      <OverAllData/>
      <div className='lg:grid lg:grid-cols-2 lg:gap-2 w-full'>

      <BarChart/>
      <LineChart />
      
    
      </div>
      <TableComponent tableData={tableData} columns={columns}/>
    </div>
  )
}

export default Overview