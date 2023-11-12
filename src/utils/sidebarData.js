import { RiHome3Fill } from "@react-icons/all-files/ri/RiHome3Fill";
import { GiRoundShield } from "@react-icons/all-files/gi/GiRoundShield";
import { HiOutlineInbox } from "@react-icons/all-files/hi/HiOutlineInbox";
import { FiUsers } from "@react-icons/all-files/fi/FiUsers";
import { FiShoppingBag } from "@react-icons/all-files/fi/FiShoppingBag";
 import { AiOutlineCalendar } from "@react-icons/all-files/ai/AiOutlineCalendar";

export const BasicData=[
    {name:'Overview',icon: <RiHome3Fill />,path:'overview'},
    {name:'Attendance',icon: <GiRoundShield />},
    {name:'Inbox',icon: <HiOutlineInbox />},
]

export const Recruitment=[
    {name:'Candidates',icon: <FiUsers />},
    {name:'Jobs',icon: <FiShoppingBag />},
    {name:'Referal',icon: <FiShoppingBag />},
]

export const Organisation=[
    {name:'Calender',icon: <AiOutlineCalendar />},
    {name:'Employee',icon: <FiShoppingBag />},
    {name:'Projects',icon: <AiOutlineCalendar />},
    {name:'Analatics',icon: <FiShoppingBag />},
    {name:'Report',icon: <FiShoppingBag />},
   
]

export const moreDetails=[
    {name:'Help',icon: <FiUsers />},
    {name:'Settings',icon: <FiShoppingBag />},
    // {name:'Inbox',icon: <CiShare2 />},
]
