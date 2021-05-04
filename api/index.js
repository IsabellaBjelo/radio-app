express = require("express");
const session = require("express-session");
// const path = require("path");

const port = 3001;

const channelRoutes = require("./routes/channelRoutes.js");
const programRoutes = require("./routes/programRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const userRoutes = require("./routes/userRoutes.js");

const app = express();
app.use(express.json());

app.use("/api/v1/channels", channelRoutes);
app.use("/api/v1/programs", programRoutes);
app.use("/api/v1/categories", categoryRoutes);
app.use("/api/v1/users", userRoutes);

app.use(
  session({
    secret: "The Return of the king",

    resave: false,

    saveUninitialized: true,

    cookie: { secure: "auto" },
  })
);

app.listen(port, (err) => {
  if (err) {
    console.error('The server could not be started');
    return;
  }
});
