# :penguin: Icebreaker

## Project Setup

A full-stack app built with JavaScript, React, WebSockets, & Axios designed to help people make friends by integrating games into their first interaction. Users can register with Facebook and match with other users to start a chatroom. The matching process is done through an algorithm based on filters chosen by the user (age, gender, location). Users can also search descriptions to find common interests quickly. Project is currently being refactored and still under development.

*Final project for [Lighthouse Labs](https://github.com/lighthouse-labs).*

**Team Members:**
- [Rachel Dallaire](https://github.com/racheldallaire)
- [Diane Kim-Lim](https://github.com/dkimlim)
- [Konrad Kipczak](https://github.com/surfman-k)
- [Austin Metka](https://github.com/AugustGit)

## Final Product

![Screenshot of home page](https://github.com/racheldallaire/icebreaker/blob/master/docs/home.gif)

Icebreaker home page. Requires Facebook authentication. 

![Screenshot of auth](https://github.com/racheldallaire/icebreaker/blob/master/docs/facebook-auth.gif)

Registration pulls profile picture from Facebook, but requires the user to fill out their own parameters, filters, and descriptions.

![Screenshot of match page](https://github.com/racheldallaire/icebreaker/blob/master/docs/matching.gif)

Icebreaker's matching feature. Flash message appears on mutual match.

![Screenshot of profile page](https://github.com/racheldallaire/icebreaker/blob/master/docs/Profile.png)

Editable profile page. Filters can be readjusted at will.

![Screenshot of chat page](https://github.com/racheldallaire/icebreaker/blob/master/docs/chats.gif)

Chat page, which pulls information from user database including description, age, and optional 'looking for love' status with matching badges.

![Screenshot of game feature](https://github.com/racheldallaire/icebreaker/blob/master/docs/games.gif)

Users may iterate through games randomly until they find one they want to send to their new friend. The answer (if applicable) is not sent or visible to the user receiving the question.

## Getting Started

1. Install dependencies for React App: `npm i`
2. Install dependencies for Chat App (inside chat_server folder): `npm i`
3. Run migrations: `knex migrate:latest`
4. Seed the data: `knex seed:run`
5. Run the Chat server: `npm start`
6. Run the React server: `npm start`
7. Visit `http://localhost:3001/`

## Dependencies

* React
* Axios
* PostgreSQL
* Knex
* Webpack
* Bootstrap/Reactstrap
* babel
* [react-fontawesome](https://github.com/FortAwesome/react-fontawesome)
* [uuid](https://github.com/kelektiv/node-uuid)
* Express
* Passport.js
* [WebSockets/ws](https://github.com/websockets/ws)

