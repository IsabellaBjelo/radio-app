const fetch = require("node-fetch");
const json = "format=json";
const paginationFalse = "pagination=false";

const utils = require("../core/utilities");

const getAllChannels = async (req, res) => {
  let channels = await fetch(
    `http://api.sr.se/api/v2/channels?${json}&${paginationFalse}`
  );
  channels = await channels.json();
  res.json(channels);
};

const getChannelById = async (req, res) => {
  let channel = await fetch(
    `http://api.sr.se/api/v2/channels/${req.params.channelId}?${json}`
  );
  channel = await channel.json();
  res.json(channel);
};
const getChannelSchedule = async (req, res) => {
  let channelSchedule = await fetch(
    `http://api.sr.se/api/v2/scheduledepisodes?channelid=${req.params.channelId}&${json}&${paginationFalse}`
  );
  channelSchedule = await channelSchedule.json();
  res.json(channelSchedule);
}
const getChannelScheduleByDate = async (req, res) => {
  let channelScheduleByDate = await fetch(
    `http://api.sr.se/api/v2/scheduledepisodes?channelid=${req.params.channelId}&date=${req.params.date}&${json}&${paginationFalse}`
  );
  channelScheduleByDate = await channelScheduleByDate.json();

  channelScheduleByDate.schedule = channelScheduleByDate.schedule.map((p) => {
    return {
      ...p,
      starttimeutc: utils.convertToDateObject(p.starttimeutc),
      endtimeutc: utils.convertToDateObject(p.endtimeutc),
    };
  });
  res.json(channelScheduleByDate);
};

module.exports = {
  getAllChannels,
  getChannelById,
  getChannelSchedule,
  getChannelScheduleByDate,
};
