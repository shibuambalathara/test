import React from 'react'
import {useLocation, useNavigate} from'react-router-dom'
import { BasicData, Organisation, Recruitment, moreDetails } from '../utils/sidebarData'

import { DiFirefox } from "react-icons/di";
const Sidebar = () => {
  const location=useLocation()
  const name = location?.pathname.replace(/^\/|\/$/g, "");
  const navigate=useNavigate()
  return (
    <div>
      <p className='font-bold  text-blue-500 mt-5 text-xl flex justify-center'><DiFirefox className='text-3xl'/><span>STRIX</span> </p>
    <div className='grid  space-y-3'>
        
       { BasicData.map((item)=>
        <div  className={`flex space-x-3 m-5 ${
          name === item.name ? 'text-blue-500' : 'rounded-md'
        }`}>
    <p className='text-xl'> {item?.icon}</p>   
        
        <button onClick={()=>navigate(item?.name)}  >{item?.name}</button>
        </div>
       )}
     <p className='text-gray-500'>  Recruitment</p>

       { Recruitment.map((item)=>
           <div  className={`flex space-x-3 m-5 ${
            name === item.name ? 'text-blue-500' : 'rounded-md'
          }`}>
      <p className='text-xl'> {item?.icon}</p>   
          
          <button onClick={()=>navigate(item?.name)}  >{item?.name}</button>
          </div>
       )}
    <p className='text-gray-500'> Organisation</p>
       { Organisation.map((item)=>
           <div  className={`flex space-x-3 m-5 ${
            name === item.name ? 'text-blue-500' : 'rounded-md'
          }`}>
      <p className='text-xl'> {item?.icon}</p>   
          
          <button onClick={()=>navigate(item?.name)}  >{item?.name}</button>
          </div>
       )}
     
       
    </div>
    <div className='mt-20 ml-5'>
       { moreDetails.map((item)=>
           <div  className={`flex my-5 ${
            name === item.name ? 'text-blue-500' : 'rounded-md'
          }`}>
      <p className='text-xl'> {item?.icon}</p>   
          
          <button onClick={()=>navigate(item?.name)}  >{item?.name}</button>
          </div>
       )}
       </div>
    </div>
  )
}

export default Sidebar