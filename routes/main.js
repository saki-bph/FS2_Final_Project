var express = require('express');
var router = express.Router();


// Require our controller.
var controller = require('../controllers/controller');

router.get('/wiki',function(req, res){
  console.log('200 ok');
  res.render('wiki');
})

router.get('/', function(req, res) {
  res.render('entry');
});

router.post('/user', function(req, res){
  let authy = req.body;
  if (authy.username != 'georgeBrown' && authy.password !=='fullstack2' ) {
    res.send("Not authorized user");
  }
  else {

      res.render('user', {user:authy.username});
  }
})

router.get('/auth', function(req, res){
  res.render('auth');
})

router.get('/pokemon_list', controller.pokemon_list);

// GET request for creating a team.
router.get('/team/create', controller.team_create_get);

// POST request for creating a team.
router.post('/team/create', controller.team_create_post);


// GET request for list of all teams.
router.get('/team', controller.team_list);


module.exports = router;
