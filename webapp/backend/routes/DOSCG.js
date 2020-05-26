var express = require('express');
var cors = require('cors')
var router = express.Router();
var controller = require('../controllers/DOSCGController');
router.get('/', cors(), controller.getData);
module.exports = router;