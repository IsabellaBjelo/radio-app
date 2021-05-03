import { useContext, useState, useEffect } from 'react';
import { ChannelsContext } from '../contexts/ChannelsProvider';

import style from '../css/ChannelSchedule.module.css';

const ChannelSchedule = (props) => {
  const today = new Date().toISOString().slice(0, 10);

  const { schedule, getChannelScheduleByDate } = useContext(ChannelsContext);
  const [currentDate, setCurrentDate] = useState(today);
  const [currentSchedule, setCurrentSchedule] = useState(schedule.schedule);
  const { channelId } = props.match.params;
  
  const changeDate = async (e) => {
    setCurrentDate(e.target.value);
    await getChannelScheduleByDate(channelId, e.target.value);
    console.log('channelschedule, schedule: ', schedule);
    setCurrentSchedule(schedule.schedule);
   // scheduledChannels();
  }

  useEffect(() => {
    console.log('aiowjdaoij')
    scheduledChannels();
  }, [currentSchedule])

  const scheduledChannels = () => {
      return currentSchedule.map((c, i) => (
      <div key={i} className={style.scheduleWrapper}>
        <div className={style.scheduleBox}>
          <div className={style.scheduleImg}>
              <img src={c.imageurl} alt="program"/>
          </div>
          <div className={style.scheduleText}>
            <div>
              <p><em>{c.starttimeutc}</em></p>
            </div>
            <div className={style.scheduleTitle}>
              <h3>{c.title}</h3>
            </div>
            <div className={style.scheduleDesc}>
              <p>{c.description}</p>
            </div>
            
          </div>
        </div>
        
      </div>
    )
  )};

  return (
    <div className={style.scheduleContainer}>
      <div className={style.scheduleChannelName}>
        <h1>Tablå för {props.name}</h1>
        <input 
          type="date" 
          id="start" 
          name="trip-start"
          value={currentDate}
          onChange={(e) => changeDate(e)}
        />
      </div>
      {scheduledChannels()}
    </div>
  )
}
 
export default ChannelSchedule;
