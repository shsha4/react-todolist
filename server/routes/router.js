const express = require('express');
const router = express.Router();
const db = require('../config/connection');

router.get('/', (req, res) => {
   res.send({'test' : 'test'});
});

module.exports = router;

