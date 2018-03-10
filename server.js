const express = require('express');
const path = require('path');
const webpack = require('webpack');
const app = express();
const webpackMiddleware = require("webpack-dev-middleware");
const webpackConfig = require('./webpack.config.js');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const bodyParser = require("body-parser");
const DataHelpers = require('./datahelpers/data-helpers.js');
const knex = require('knex')({
  client: 'pg',
  version: '7.2',
  connection: {
    host : 'localhost',
    user : 'final',
    password : 'final',
    database : 'icebreaker'
  }
});



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

app.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email', 'public_profile']}));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { successRedirect: '/jammin!!!',
                                      failureRedirect: '/profile' }));



app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'index.html'));
});

app.post('/register', (req, res) => {
  console.log("clicked on extra info yaaaaa!");
});

app.listen(8080, () => console.log('Server listening on 8080'));
