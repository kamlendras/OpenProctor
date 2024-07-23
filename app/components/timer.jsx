import React from 'react';
import { useTimer } from 'react-timer-hook';
import Typography from '@mui/joy/Typography';
function MyTimer({ expiryTimestamp }) {
  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });


  return (
    <div style={{textAlign: 'center'}}>
      <Typography level="h2">
      <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>

      </Typography>
        
      
    
      {/* <p>{isRunning ? 'Running' : 'Not running'}</p> */}
      {/* <button onClick={start}>Start</button> */}
      {/* <button onClick={pause}>Pause</button> */}
      {/* <button onClick={resume}>Resume</button> */}
      {/* <button onClick={() => {
        Restarts to 5 minutes timer
        const time = new Date();
        time.setSeconds(time.getSeconds() + 300);
        restart(time)
      }}>Restart</button> */}
    </div>
  );
}

export default function App() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 10800); // 10 minutes timer
  return (
    <div>
      <MyTimer expiryTimestamp={time} />
    </div>
  );
}