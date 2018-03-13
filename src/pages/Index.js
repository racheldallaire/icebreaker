// Application entrypoint.

// Load up the application styles
require("../stylesheets/application.scss");
require("../stylesheets/main.scss");

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import Chats from './Chats.js';

ReactDOM.render(<App />, document.getElementById('react-root'));