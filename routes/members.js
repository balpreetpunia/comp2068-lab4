let express = require('express');
let router = express.Router();


/* GET prince page. */
router.get('/prince', function(req, res, next) {
    res.render('members/prince');
});
/* GET harminder page. */
router.get('/harminder', function(req, res, next) {
    res.render('members/harminder');
});
/* GET balpreet page. */
router.get('/balpreet', function(req, res, next) {
    res.render('members/balpreet');
});
/* GET kimmy page. */
router.get('/kimmy', function(req, res, next) {
    res.render('members/kimmy');
});
module.exports = router;
