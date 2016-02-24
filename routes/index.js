/* Handles all page routing */

var express = require('express');
var router = express.Router();

/* GET index page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'New Bethel Assembly Of God' });
});

module.exports = router;
