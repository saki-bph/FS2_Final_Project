let pokedex = require('pokedex-promise-v2');
let request = require('request');
let firebase = require('firebase');
let database = firebase.database();
let P = new pokedex();
let teams = []

// Display list of all Pokemon.

exports.pokemon_list = function(req, res, next){
  let limiter = {limit:806};
  let pic_url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
  let all_pokemon = [];
  P.getPokemonsList(limiter).then(function(response){
    all_pokemon = response.results;
    let pokemon_url = response.results.url;
    console.log("200 ok")
    res.render('pokemon_list', {title: 'Pokemon List', pic_url:pic_url, all_pokemon: all_pokemon});
  })

}

exports.team_list = function(req, res, next) {
  console.log("200 ok")
  res.render('team_list', { title: 'Team List', list_team: teams});
};

// Display Team create form on GET.
exports.team_create_get = function(req, res, next) {
  console.log("200 ok")
    res.render('team_form', { title: 'Create Genre'});
};

// Handle team create on POST.
exports.team_create_post = function(req,res,next){
  var teamsb = {}
  teamsb.roster = []
    teamsb.name = req.body.name
    teamsb.roster.push(req.body.roster_one)
    teamsb.roster.push(req.body.roster_two)
    teamsb.roster.push(req.body.roster_three)
    teamsb.roster.push(req.body.roster_four)
    teamsb.roster.push(req.body.roster_five)
    teamsb.roster.push(req.body.roster_six)
  teams.push(teamsb);
  console.log("200 ok")
  res.render('team_list',{ title: 'Team List', list_team: teams});
  };
