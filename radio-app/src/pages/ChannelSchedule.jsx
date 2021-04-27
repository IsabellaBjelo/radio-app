import { useEffect, useContext } from 'react';

import { ChannelsContext } from '../contexts/ChannelsProvider';
// import { useLocation } from 'react-router-dom';

const ChannelSchedule = (props) => {
  const { getChannelScheduleByDate, schedule } = useContext(ChannelsContext);
  const { channelId } = props.match.params;
  // const { state } = useLocation();
  // console.log('state', state)

  useEffect(() => {
    getChannelScheduleByDate(channelId);
  });

  let content = <h2>laddar ..</h2>
  if (schedule) {
    console.log('schedule:', schedule);
    content = (
      <div>
        <p>kanaltablå</p>
        <p>{schedule.title}</p>
      </div>
    )
  }
  return <div>{content}</div>
  // const scheduledChannels = state.map((channels, i) => {
  //   return (
  //     <div key={i}>
  //       <p>{channels.name}</p>
  //     </div>
  //   )
  // })

  // return (
  //   <div>
  //     {scheduledChannels}
  //   </div>
  // )
}
 
export default ChannelSchedule;