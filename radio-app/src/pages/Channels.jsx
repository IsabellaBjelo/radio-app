import { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { ChannelsContext } from '../contexts/ChannelsProvider';
import style from '../css/Channels.module.css'

const Channels = () => {
  const history = useHistory();
  const { channels } = useContext(ChannelsContext);
  // getChannelSchedule borttaget efter channels,
  
  const handleClick = (channel) => {
    // async borttaget innan (channel)
    // await getChannelSchedule(channel.id);
    // console.log('channels.jsx handleclick', channels)
    console.log('channel: ', channel)
    // history.push({
    //   pathname: `/channels/schedule/${channel.id}`,
    //   // pathname: '/channelSchedule',
    //   state: channels
    // });
    history.push(`/channels/schedule/${channel.id}`)
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
      <h1>Kanaler</h1>
      <div className={style.wrapper}>
        {channels && renderChannels()}
      </div>
    </div>
  );
}

export default Channels;