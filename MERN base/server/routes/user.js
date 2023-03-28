const express = require('express');

// controller functions
const { loginUser, signupUser, verifyEmail } = require('../controllers/userController');

const router = express.Router();

// login route
router.post('/login', loginUser);

// signup route
router.post('/signup', signupUser);

router.post('/verify-email',  verifyEmail)


module.exports = router;