const express = require('express');
import * as controller from './controller/HangmanController.js';
const router = express.Router();



router.get('/getWords', controller.getWords);

module.exports = router;