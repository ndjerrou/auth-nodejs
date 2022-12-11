const express = require('express');
const { signUp } = require('./users.controller');

const validatePayload = require('../middlewares/validatePayload');

const router = express.Router();

router.post('/signup', validatePayload, signUp);
router.post('/signin', validateSignInPayload, signIn);

module.exports = router;
