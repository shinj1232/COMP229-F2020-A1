var express = require('express');
var router = express.Router();

/* GET Contact page. */
router.get('/contact', function(req, res, next) {
    res.send('PLACEHOLDER');
});

module.exports = router;