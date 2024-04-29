import React, { useState, useEffect } from 'react';
import Timer from './Timer';






const TimerNavbar = () => {
    
    console.log("render")
    const [time,setTime] = useState('');
    const [isActive, setisActive] = useState(false);
    const [isDone,setDone] = useState(false);


    const handleDone = () => {
        setisActive(false);
         setDone(true);

    }

   


   
    

    
   





  return (
    <div className='flex justify-between items-center h-[130px] text-white'>
     
      
     
        {
        
          (!isDone)?(isActive ?<button className='border-2  border-gray-900 ml-[30px] p-1 w-[150px] bg-red-500  hover:bg-red-700' onClick={() => setisActive(false)}>Stop</button> : <button className='border-2 border-gray-900 ml-[30px] w-[150px] p-1 bg-green-500  hover:bg-green-700' onClick={() => setisActive(true)}>Start</button> ):<button className=' ml-[30px] w-[150px] p-1'></button>
        
        }

           
        
        
         <h1 className='text-black'><Timer isActive = {isActive} isDone={isDone} /></h1>

        {
          (!isDone)?<button className='border-2 border-gray-900 mr-[30px] w-[150px] p-1 bg-blue-500  hover:bg-blue-700' onClick={handleDone}>Task Done </button>:<button className=' mr-[30px] w-[150px] p-1'></button>
        } 

    </div>
  )
}

export default TimerNavbar