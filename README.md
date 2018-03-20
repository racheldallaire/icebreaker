# Icebreaker

## Team Members
- [Austin Metka](https://github.com/AugustGit)
- [Diane Kim-Lim](https://github.com/dkimlim)
- [Konrad Kipczak](https://github.com/surfman-k)
- [Rachel Dallaire](https://github.com/racheldallaire)

## Project

Final project for [Lighthouse Labs](https://github.com/lighthouse-labs). Users can register with a Facebook account and match with people to find new friends. The matching process is done through filters chosen by the user (age, gender, location) and a chatroom is created once a match is created. Project is currently being refactored and still under development.

## Getting Started

1. Install dependencies for React App: `npm install`
2. Install dependencies for Chat App (inside chat_server folder): `npm install`
3. Run migrations: `knex migrate:latest`
4. Seed the data: `knex seed:run`
5. Run the Chat server: `npm start`
6. Run the React server: `npm start`
7. Visit `http://localhost:3001/`

## Dependencies for React App

- "@fortawesome/fontawesome": "^1.1.4",
- "@fortawesome/fontawesome-free-solid": "^5.0.8",
- "@fortawesome/react-fontawesome": "0.0.17",
- "axios": "^0.18.0",
- "body-parser": "^1.18.2",
- "bootstrap": "^4.0.0",
- "cookie-session": "^2.0.0-beta.3",
- "dotenv": "^5.0.1",
- "fbgraph": "^1.4.1",
- "knex": "^0.14.4",
- "knex-logger": "^0.1.0",
- "node-sass": "^4.7.2",
- "passport": "^0.4.0",
- "passport-facebook": "^2.1.1",
- "pg": "^7.4.1",
- "psql-api": "^0.9.11",
- "react": "^15.5.4",
- "react-dom": "^15.5.4",
- "react-redux": "^5.0.7",
- "react-router-dom": "^4.1.1",
- "react-s-alert": "^1.4.1",
- "reactstrap": "^5.0.0-beta.2",
- "ws": "^5.0.0"


## Dependencies for Chat App

-  "random-color": "^1.0.1",
-  "uuid-v4": "^0.1.0",
-  "ws": "^5.0.0"
