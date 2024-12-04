import moment from 'moment-timezone';
import { useEffect, useState } from "react";


const Clock = () => {
  let time = new Date().toLocaleTimeString();
  const [currentTime, setCurrentTime] = useState(time);
  const [timeZone, setTimeZone] = useState("Asia/Kolkata");

  const updateTime = () => {
    let time = moment().tz(timeZone).format('LTS');
    setCurrentTime(time);
  };
  setInterval(updateTime, 1000);
  const handleTimeChange = (e) => {
    const timeZone = e.target.value;
    setTimeZone(timeZone);
  };
  useEffect(()=>{
    updateTime();
  })

  return (
    <div className='clock'>
      <h1 className="loading">{currentTime}</h1>
      {
        <select value={timeZone} onChange={handleTimeChange}>
          <option value="Asia/Kolkata">Asia/Kolkata</option>
          <option value="Asia/Tomsk">Asia/Tomsk</option>
          <option value="America/Nome">America/Nome</option>
          <option value="Australia/Eucla">Australia/Eucla</option>
          <option value="Indian/Kerguelen">Indian/Kerguelen</option>
        </select>
      }
    </div>
  );
};

export default Clock;
