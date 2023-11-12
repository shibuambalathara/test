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
      <div className='flex w-full space-x-2'>

      <BarChart/>
      <LineChart />
      
    
      </div>
      <TableComponent tableData={tableData} columns={columns}/>
    </div>
  )
}

export default Overview