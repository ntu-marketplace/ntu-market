const User = require('../models/User');
const { generateOTP, mailTransport, generateEmailTemplate } = require('../otp/generateOTP');

const handleCreateUser = async (req, res) => {
    const { username, password, name, email, mobile } = req.body;
    if (!username || !password || !email) return res.status(400).json("Missing information")

    try {
        const user = await User.create({username, password, name, email, mobile});
        if (!email.endsWith('@e.ntu.edu.sg')) {
            throw Error("Please enter a valid NTU email")
        }
        const isExist = await User.findOne({ username });
        if (isExist) {
            throw Error("Username already in use");
        } else {
            const ifExist = await User.findOne({email:email});
            if (ifExist) {
                throw Error("Email already in use");
            } 
        }
        const verified = false;
        const user = await User.create({username, password, name, email, mobile, verified});
        // .then(() => res.json("Successful insert"))
        // .catch(console.log)
        const OTP = generateOTP();
        // const verificationToken = new VerificationToken({
        //     owner: user._id,
        //     token: OTP
        // })

        // await verificationToken.save()
        
        // await user.save() ###########important!

        mailTransport().sendMail({
            from: 'emailverification@ntumarket.com',
            to: user.email,
            subject: "Verify your email account",
            html:generateEmailTemplate(OTP)
        })
        return res.status(201).json({ user: user.username, otp: OTP });
    } catch(e) {
        console.log(e);
        res.status(400).json("Error in insert");
    }
}
const verifyEmail = async (req, res) => {
    console.log(req.body.user);
    try {
        const user = await User.findOne({username:req.body.user});
        console.log(user);
        user.verified = true;
        await user.save();
        return res.status(201).json("Successful insert");
        
    } catch (e) {
        console.log("ERROR VERI "+e);
        return res.status(400).json("ERROR IN VERIFICATION");
    }
  }

module.exports = {handleCreateUser, verifyEmail}