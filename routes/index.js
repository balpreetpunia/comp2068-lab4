var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lab 4' });
});

// other get functions are routed through members.js
module.exports = router;
