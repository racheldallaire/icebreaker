const express = require('express');
const cookieSession = require('cookie-session');
const path = require('path');
const webpack = require('webpack');
const app = express();
const databaseRoutes  = express.Router();
const webpackMiddleware = require("webpack-dev-middleware");
const webpackConfig = require('./webpack.config.js');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const bodyParser = require("body-parser");
const knex = require('knex')({
  client: 'pg',
  version: '7.2',
  connection: {
    //port: 5432,
    host : 'localhost',
    user : 'final',
    password : 'final',
    database : 'icebreaker'
  }
});

app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let fbid = "";
let acc_token = "";

///////////FACEBOOK AUTHENTICATION//////////////////////////////

passport.use(new FacebookStrategy({
    clientID: "575115656176298",
    clientSecret: "4d3a4ba21f529ae6b035cc38f95fbeb6",
    callbackURL: "http://localhost:8080/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    acc_token = accessToken;
    fbid = profile.id;
    knex.select().table('users').where({facebook_id: fbid})
    .then(function(user) {
      if(user.length < 1){
        done(null, console.log("need to register"));
      } else {
        done(null, user = user);
      }
    });
  }
));
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

app.use(webpackMiddleware(
  webpack(webpackConfig),
  { publicPath: '/' }
));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email', 'public_profile']}));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { successRedirect: '/matches',
                                      failureRedirect: '/signup' }));

///////////ROUTES//////////////////////////////

app.get('/api/matches', (req, res) => {
  knex.select("*")
        .from("users")
        .then((result) => {
          res.send(result);
        });
});

app.get('/api/filters', (req, res) => {
  res.send('HELLO MOTO!');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'index.html'));
});

app.post('/signup', (req, res) => {
  console.log(fbid);
  let facebook_id = fbid;
  let first_name = req.body.first_name;
  let last_name = req.body.last_name;
  let age = req.body.age;
  let gender = req.body.gender;
  let description = req.body.description;
  knex('users').insert({facebook_id: facebook, first_name: first_name, last_name: last_name, age: age, gender: gender, description: description});
  res.redirect('/filters');
});

app.post('/filters', (req, res) => {
  console.log(req.body);
  res.redirect('/matches');
});

app.listen(8080, () => console.log('Server listening on 8080'));
