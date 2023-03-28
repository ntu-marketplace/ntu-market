const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const validator = require('validator');
const { generateOTP, mailTransport, generateEmailTemplate } = require('../otp/generateOTP');
const VerificationToken = require('../models/verificationToken');
const { isValidObjectId } = require('mongoose');

const createToken = (_id) => {
  return jwt.sign({_id}, process.env.SECRET, { expiresIn: '7d' })
};

// login
const loginUser = async (req, res) => {
  const {username, password} = req.body;

  try {
    const user = await User.login(username, password);

    // create a token
    const token = createToken(user._id);

    res.status(200).json({username, token});
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

// signup
const signupUser = async (req, res) => {
  const {username, email, password} = req.body;

  try {
    if (!username || !password || !email ) {
      throw Error("All fields must be filled!");
    }
    
    if (!validator.isEmail(email) || !email.endsWith('@e.ntu.edu.sg')) {
      throw Error("Please enter a valid NTU email")
    }
  
    const isExist = await User.findOne({ username });
  
    if (isExist) {
      throw Error("Username already in use");
    } 
  
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hash
    })

    const OTP = generateOTP();
      const verificationToken = new VerificationToken({
        owner: newUser._id,
        token: OTP
      })

      await verificationToken.save()
      await newUser.save()

      mailTransport().sendMail({
        from: 'emailverification@ntumarket.com',
        to: newUser.email,
        subject: "Verify your email account",
        html:generateEmailTemplate(OTP)
      })
      res.send(newUser)

    // create a token
    // const token = createToken(user._id);
    // res.status(200).json({username, token});
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

const verifyEmail = async (req, res) => {
  const {userId, otp} = req.body
  if(!userId || !otp.trim()){
    res.status(401).json({ success: false, error: "Invalid request, missing parameters" });
  } 
  if(!isValidObjectId(userId)) {
    res.status(401).json({ success: false, error: "Invalid user id" });
  }

  const user = await User.findById(userId)
  if(!user){
    res.status(401).json({ success: false, error: "user not found" });
  }
  if(user.verified){
    res.status(401).json({ success: false, error: "This account is already verified" });
  }

  const token = await VerificationToken.findOne({owner: user._id})
  if(!token){
    res.status(401).json({ success: false, error: "user not found" });
  }

  const isMatched = await token.compareToken(otp)
  if(!isMatched){
    res.status(401).json({ success: false, error: "Please enter a valid token" });
  }

  user.verified = true;

  await VerificationToken.findByIdAndDelete(token._id)
  await user.save()

  res.json({success: true, message: "your email is verified."})
}

module.exports = { signupUser, loginUser, verifyEmail };