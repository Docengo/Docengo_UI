import React from 'react'
import Navbar from '../components/Navbar';
import CardContainer from '../components/CardContainer';

function Batches() {
  return (
    <div>
        <Navbar/>
        <div className='h-screen pt-[7rem] bg-[#14213d]'>
        <CardContainer/>
        </div>
    </div>
  )
}

export default Batches;