import { createContext, useState, useEffect } from "react";

export const ChannelsContext = createContext();

const ChannelsProvider = (props) => {
  const [channels, setChannels] = useState([]);
  const [oneChannel, setOneChannel] = useState([]);
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    getAllChannels();
  }, []);

  const getAllChannels = async () => {
    let channels = await fetch("/api/v1/channels");
    channels = await channels.json();
    setChannels(channels.channels);
  };

  const getChannelById = async (channelId) => {
    let oneChannel = await fetch(`/api/v1/channels/${channelId}`);
    oneChannel = await oneChannel.json()
    setOneChannel(oneChannel);
  }

  const getChannelScheduleByDate = async (channelId, date) => {
    let schedule = await fetch(`/api/v1/channels/schedule/${channelId}/${date}`);
    schedule = await schedule.json();
    setSchedule(schedule);
  }

  const values = {
    channels,
    oneChannel,
    schedule,
    getChannelById,
    getChannelScheduleByDate
  }

  return (
    <ChannelsContext.Provider value={values}>
      {props.children}
    </ChannelsContext.Provider>
  );
};
 
export default ChannelsProvider;