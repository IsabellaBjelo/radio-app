const crypto = require("crypto");

module.exports = class Encrypt {
  static encrypt(password) {
    return (
      crypto
        .createHmac("sha256", "Bilbo")
        .update(password) 
        .digest("hex") 
    );
  }
};
