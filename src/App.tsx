import React from 'react';
import Sidebar from './components/sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Overview from './pages/oversview';
import Header from './components/header';




function App() {
  return (
    <div className="w-full flex py-10 px-5  bg-gray-400">
      <div className='flex rounded-md bg-white w-full shadow-lg'>
       

        <div className='flex w-full '>
          <Router>
            <div className='w-60 bg-gray-100 rounded-l-lg'>
          <Sidebar />
        
        </div>
        <div className='w-full p-2'>
          <Header/>
            <Routes >
              <Route path="/overview" element={<Overview />} />
            </Routes>
            </div>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
