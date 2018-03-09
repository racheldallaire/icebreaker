const express = require('express');
const path = require('path');
const webpack = require('webpack');

const app = express();

const webpackMiddleware = require("webpack-dev-middleware");
const webpackConfig = require('./webpack.config.js');

const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;

passport.use(new FacebookStrategy({
    clientID: "575115656176298",
    clientSecret: "4d3a4ba21f529ae6b035cc38f95fbeb6",
    callbackURL: "http://localhost:8080/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    // User.findOrCreate(..., function(err, user) {
    //   if (err) { return done(err); }
    //   done(null, user);
    // });
    console.log(profile);
  }
));

app.use(webpackMiddleware(
  webpack(webpackConfig),
  { publicPath: '/' }
));

app.post("/register", function(req, res){
   console.log(req);
   res.redirect("/profile");
});

app.get('/auth/facebook', passport.authenticate('facebook'));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { successRedirect: '/profile',
                                      failureRedirect: '/login' }));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'index.html'));
});

app.listen(8080, () => console.log('Server listening on 8080'));
