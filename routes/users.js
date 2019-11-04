var express = require('express');
var router = express.Router();

// GET users listing.
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res){
  let authy = req.body;
  if (authy.username != 'georgeBrown' && authy.password !=='fullstack2' ) {
    res.send("Not authorized user");
  }
  else {

      res.render('user', {user:authy.username});
  }
})

module.exports = router;
