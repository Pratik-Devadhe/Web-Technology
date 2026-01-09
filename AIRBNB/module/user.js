const mongoose = require("mongoose");

// ✅ FIXED IMPORT
const passportLocalMongoose =
  require("passport-local-mongoose").default ||
  require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true   // ✅ spelling fix (required, not require)
  }
});

// ✅ plugin now receives a FUNCTION
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
