import { useContext } from 'react';
import { ChannelsContext } from '../contexts/ChannelsProvider';

import style from '../css/ChannelSchedule.module.css';

const ChannelSchedule = (props) => {
  const { schedule } = useContext(ChannelsContext);
  // getChannelScheduleByDate borttagen sålänge, behöver senare tihi
  // const { channelId } = props.match.params;

  // console.log('sched ', schedule);

  // styla tills du är nöjd hehe sen ska det finnas en datepicker, när man valt ett date så ska sidan (komponenten)
  // renderas om med en ny hämtning av getChannelScheduleByDate(channelId (samma id), date (nytt datum)).
  // onchange metod på date picker så att en ny hämtning görs 

  const scheduledChannels = schedule.schedule.map((c, i) => {
    console.log('scheduledchannels: ', c);
    return (
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
  })

  return (
    <div className={style.scheduleContainer}>
      <div className={style.scheduleChannelName}>
        <h1>Tablå för {props.name}</h1>
        <input 
          type="date" 
          id="start" 
          name="trip-start"
          value="2021-04-28"
        />
      </div>
      {scheduledChannels}
    </div>
  )
}
 
export default ChannelSchedule;