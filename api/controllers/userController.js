const sqlite3 = require("sqlite3");
const Encrypt = require("../Encrypt");
const path = require("path");

const db = new sqlite3.Database(path.join(__dirname, "../radio.db"));

const whoami = (req, res) => {
  res.json(req.session.user || null);
};

const login = (req, res) => {
  const email = req.body.email;
  let query = `SELECT * FROM users WHERE email = "${email}"`;
  db.get(query, (err, userInDB) => {
    if (Object.keys(userInDB).length === 0) {
      res.status(401).json({ error: "Bad credentials (username)" });
      return;
    }

    const password = Encrypt.encrypt(req.body.password);
    if (userInDB.password === password) {
      delete userInDB.password;
      req.session.user = userInDB;
      res.json({ success: "Login successfull", loggedInUser: userInDB });
      return;
    } else {
      res.status(401).json({ error: "Bad credentials (password)" });
      return;
    }
  });
};
const logout = (req, res) => {
   delete req.session.user;
   res.json({ success: "Logout Successfully" });
};

const register = (req, res) => {
  let userToRegister = req.body;

  const email = req.body.email;
  const password = req.body.password;

  let query = `SELECT * FROM users WHERE email = ${req.body.email}`;
  let params = { $email: userToRegister.email };
  db.get(query, params, (err, userExist) => {
    if (userExist) {
      res.status(400).json({ error: "User with that email already exists" });
      return;
    }
  });

  userToRegister.password = Encrypt.encrypt(userToRegister.password);
  query = `INSERT INTO users (email, password) VALUES ("${email}", "${password}")`;
  params = {
    $email: userToRegister.email,
    $password: password,
  };

  db.run(query, params, function (err) {
    if (err) {
      res.status(400).json({ error: err });
      return;
    }

    res.json({ success: "User register successfull", lastID: this.lastID });
  });
};

module.exports = { whoami, login, logout, register };
