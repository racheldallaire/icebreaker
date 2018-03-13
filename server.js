const express = require('express');
const cookieSession = require('cookie-session');
const path = require('path');
const webpack = require('webpack');
const graph = require('fbgraph');
const app = express();
const databaseRoutes  = express.Router();
const webpackMiddleware = require("webpack-dev-middleware");
const webpackConfig = require('./webpack.config.js');
const passport = require('passport');
const pg = require('pg');
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
let fb_pic = "";
let acc_token = "";

///////////FACEBOOK AUTHENTICATION//////////////////////////////

passport.use(new FacebookStrategy({
    clientID: "575115656176298",
    clientSecret: "4d3a4ba21f529ae6b035cc38f95fbeb6",
    callbackURL: "http://localhost:8080/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    graph.setAccessToken(accessToken);
    acc_token = accessToken;
    fbid = profile.id;
    graph.get("me/?fields=picture.width(480).height(480)", function(err, res) {
      fb_pic = (res.picture.data.url);
    });
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
app.get('/api/potentials', (req, res) => {
  const cookieid = req.session["id"]
  console.log("potentials get")
  knex('users').whereNotExists(knex.select('*').from('userlikes').whereRaw('users.id = userlikes.userid2'))
  .then((result) => {
      console.log("knex result", result)
      res.send(result)
        })
  .catch((err) => {
          console.log("error", err)

        })
    })

app.get('/api/matches', (req, res) => {
  knex.select("*")
        .from("users")
        .then((result) => {
          console.log(result);
          res.send(result);
        });
});

app.get('/api/filters', (req, res) => {
  res.send(fb_pic);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'index.html'));
});

app.post('/signup', (req, res) => {
  let facebook_id = fbid;
  let facebook_picture_url = fb_pic;
  let first_name = req.body.first_name;
  let last_name = req.body.last_name;
  let age = Number(req.body.age);
  let gender = req.body.gender;
  let description = req.body.description;
  knex('users').insert({facebook_id: facebook_id, first_name: first_name, last_name: last_name, age: age, gender: gender, description: description, facebook_picture_url: facebook_picture_url});
  req.session = {"id": fbid};
  res.redirect('/filters');
});

app.post('/filters', (req, res) => {
  console.log(req.body);
  res.redirect('/matches');
});

app.listen(8080, () => console.log('Server listening on 8080'));
