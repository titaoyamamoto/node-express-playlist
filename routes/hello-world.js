const express = require('express');
const router = express.Router();

const helloController = require('../controllers/hello-world');

router.route('/hello').get(helloController.hello);

module.exports = router;
