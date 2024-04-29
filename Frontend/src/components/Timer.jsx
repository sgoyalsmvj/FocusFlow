import React, { useState, useEffect, useCallback } from 'react';

const Timer = ({isActive ,isDone}) => {
  const [seconds, setSeconds] = useState(0);

  console.log("render inside timer" + isActive)

  

  useEffect(() => {
    let timer;

    if (isActive) {
      timer = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isActive]);


//   useEffect(() => {
//     if (isActive) {
//       // Reset timer when isRunning becomes false
//       setSeconds(0);
//     }
//   }, [isActive]);

  const formatTime = useCallback((timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = Math.floor(timeInSeconds % 60);

    const pad = (value) => {
      return value < 10 ? '0' + value : value;
    };

    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  }, []);


  if(isDone){
    
    return(
       
         <div> 
             The task is completed in {seconds} seconds
         </div>
      
    );
}



  return <div>Timer: {formatTime(seconds)}</div>;
};

export default Timer;
