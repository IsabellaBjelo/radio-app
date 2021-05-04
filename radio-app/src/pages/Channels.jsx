import { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { ChannelsContext } from '../contexts/ChannelsProvider';
import style from '../css/Channels.module.css'

const Channels = () => {
  const history = useHistory();
  const { channels, getChannelScheduleByDate } = useContext(ChannelsContext);
  
  const handleClick = async (channel) => {
    let date = new Date();
    date = date.toISOString().split('T')[0];
    await getChannelScheduleByDate(channel.id, date);
    history.push({
      pathname: `/channels/schedule/${channel.id}/${date}`,
    });
  }

  const renderChannels = () => {
    return channels.map((channel, i) => (
      <div key={i} className={style.cards} onClick={() => handleClick(channel)} >
        <div className={style.channelContainer}>
          <div className={style.channelName}>
            <p>{channel.name}</p>
          </div>
          <div className={style.logo}>
            <img src={channel.image} alt="channel logo"/>
          </div>
          <div className={style.tagline}>
            <p>{channel.tagline}</p>
          </div>
        </div>
      </div>
    ));
  }



  return (
    <div className={style.channels}>
      <div className={style.channelText}>
        <h1>Kanaler</h1>
        <p><em>Klicka på kanalen att se tablån!</em></p>
      </div>
      <div className={style.wrapper}>
        {channels && renderChannels()}
      </div>
    </div>
  );
}

export default Channels;
