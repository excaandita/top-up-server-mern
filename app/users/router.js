var express = require('express');
var router = express.Router();
const {viewSignIn, actionSignIn, actionLogOut} = require('./controller')

/* GET home page. */
router.get('/', viewSignIn);
router.post('/', actionSignIn);
router.get('/logout', actionLogOut);

module.exports = router;
