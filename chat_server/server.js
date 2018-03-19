const express = require('express');
const SocketServer = require('ws').Server;
const uuidv4 = require('uuid/v4');
const WebSocket = require('ws');
const pg = require('pg');
const app = express();
const bodyParser = require("body-parser");
const knex = require('knex')({
  client: 'pg',
  version: '7.2',
  connection: {
    port: 5432,
    host : 'localhost',
    user : 'final',
    password : 'final',
    database : 'icebreaker'
  }
});

// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
// Make the express server serve static assets from the /public folder
.use(express.static('public'))
.listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Create the WebSockets server
const wss = new SocketServer({ server });


app.get('/api/messages_db', (req, res) => {
  const cookieid = 1 //req.session.id
  knex
  .select('*')
  .from('users')
  // .innerjoin('userlikes','users.id','userlikes.userid1')
  // .innerjoin('messages', 'userlikes.id', 'messages.userlikesid')
  .where('users.id', cookieid)
  // .where('userlikes.liked', true)
  // .where('userlikes.userid1', cookieid).orWhere('userlikes.userid2',  cookieid)
  .then((result) => {
      console.log("HELLOOOOOOOOOO CHAT")
      res.send(result)
  })
  .catch((err) => {
          console.log("error", err)
  })
});


// Create broadcast function that will send data to client
wss.broadcast = function broadcast(data) {
  wss.clients.forEach(function each(client) {
    console.log("DATA",data)
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(data));
    }
  });
};

// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.
wss.on('connection', (ws) => {

  console.log('A client connected');

  ws.on('message', function incoming(message) {
      let msg = JSON.parse(message);
      msg.key = uuidv4();

      if(msg.type === 'postMessage') {
        msg.type === 'incomingMessage'
      }
    wss.broadcast(msg);
  });

  // Set up a callback for when a client closes the socket.
  ws.on('close', () => {
    console.log('A client disconnected');
    })
});