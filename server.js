const express = require('express');
const path = require('path');
const webpack = require('webpack');
const app = express();
const databaseRoutes  = express.Router();
const webpackMiddleware = require("webpack-dev-middleware");
const morgan = require('morgan')
const webpackConfig = require('./webpack.config.js');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const bodyParser = require("body-parser");
const knex = require('knex')({
  client: 'pg',
  version: '7.2',
  connection: {
    // port: 5432,
    host : 'localhost',
    user : 'final',
    password : 'final',
    database : 'icebreaker'
  }
});


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

passport.use(new FacebookStrategy({
    clientID: "575115656176298",
    clientSecret: "4d3a4ba21f529ae6b035cc38f95fbeb6",
    callbackURL: "http://localhost:8080/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    knex.select().table('users').where({first_name: 'Baracko'})
    .then(function(user) {
      console.log("WOWOWWOWOWOWW", user);
      if(user.length < 1){
        done(null, console.log("need to register"));
        //Needs to save fbid as cookie, redirect to complete registration page on which it will then save to db and redirect to dashboard
      } else {
        done(null, user = user);
        //done(null, console.log(accessToken, profile.id));
        //Needs to set cookies and redirect to dashboard
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
app.use( passport.initialize());
app.use( passport.session());
app.use( bodyParser.json());
app.use( bodyParser.urlencoded({ extended: true }));

app.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email', 'public_profile']}));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { successRedirect: '/jammin!!!',
                                      failureRedirect: '/signup' }));

app.get('/api/potentials', (req, res) => {
  knex.select('*').from('users').havingNotExists(function() {
  this.select('*').from('userlikes').whereRaw('users.id = userlikes.userid2')
    .then((result) => {
      console.log(result)
      res.send(result)
        })
    })
});

app.get('/api/matches', (req, res) => {
  knex.select("*")
        .from("users")
        .then((result) => {
          console.log(result)
          res.send(result)
        })
});


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'index.html'));
});

app.post('/signup', (req, res) => {
  console.log(req.body);
  res.redirect('/filters');
});

app.post('/filters', (req, res) => {
  console.log(req.body);
  res.redirect('/matches');
});

app.listen(8080, () => console.log('Server listening on 8080'));
