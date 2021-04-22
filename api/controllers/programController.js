const fetch = require("node-fetch");
const json = "format=json";
const paginationFalse = "pagination=false";

const utils = require("../core/utilities");

// hämta alla program för en viss kanal
const getAllPrograms = async (req, res) => {
  console.log('cow');
  let programs = await fetch(
    `http://api.sr.se/api/v2/programs/index?channelid=${req.params.channelId}&${json}&${paginationFalse}`
  );
  programs = await programs.json();
  res.json(programs);
};

// hämta alla program i en viss kategori
const getProgramByCat = async (req, res) => {
  let programByCat = await fetch(
    `http://api.sr.se/api/v2/programs/index?&programCategoryId=${req.params.programCategoryId}&${json}&${paginationFalse}`
  );
  programByCat = await programByCat.json();
  res.json(programByCat);
};

// hämta info för ett visst program
const getProgramInfo = async (req, res) => {
  let program = await fetch(
    `http://api.sr.se/api/v2/programs/${req.params.programId}?${json}&${paginationFalse}`
  );
  program = await program.json();
  const programInfo = program.program.description;
  res.json(programInfo);
};

// kunna se när ett visst program sänds
// const getProgramSchedule = async (req, res) => {
//   let programSchedule = await fetch(
//     `http://api.sr.se/api/v2/scheduledepisodes?${req.params.programId}&${json}&${paginationFalse}`
//     // http://api.sr.se/api/v2/scheduledepisodes?programid=1646
//   );
//   programSchedule = await programSchedule.json()
//   res.json(programSchedule);
// }


module.exports = {
  getAllPrograms,
  getProgramByCat,
  getProgramInfo
}
