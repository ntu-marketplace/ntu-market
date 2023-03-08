const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
      type: String,
      required: true
  },
  name: {
    type: String,
    // required: true
  },
  email: {
    type: String,
    // required: true
  },
  mobile: {
    type: String,
    // required: true
  }
});


// signup
userSchema.statics.signup = async function(username, email, password) {

  if (!username || !password || !email) {
    throw Error("All fields must be filled!");
  }
  // validate password stregnth
  // if (!validator.isStrongPassword(password)) { 
  //   throw Error("Password not strong enough!")
  // }

  if (!validator.isEmail(email) || !email.endsWith('@e.ntu.edu.sg')) {
    throw Error("Please enter a valid NTU email")
  }


  const isExist = await this.findOne({ username });

  if (isExist) {
    throw Error("Username already in use");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ username, email, password: hash });

  return user;
};


// login
userSchema.statics.login = async function(username, password) {

  if (!username || !password) {
    throw Error("All fields must be filled!");   
  }

  const user = await this.findOne({ username })
  if(!user) {
    throw Error("Invalid username!")
  }

  const match = await bcrypt.compare(password, user.password)
  if (!match) {
    throw Error("Invalid password!")
  }

  return user;
};
  
module.exports = mongoose.model("User", userSchema);