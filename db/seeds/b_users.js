exports.seed = function(knex, Promise) {
  return knex('users')
    .then(function () {
      return Promise.all([
        knex('users').insert({first_name: "Rachie", last_name: "D", age: 23, gender: "female", location: "45.4963839, -73.57059649999997"}),
        knex('users').insert({first_name: "Rihanna", last_name: "Fenty", age: 30, gender: "female", location: "13.193887, -59.54319799999996"}),
        knex('users').insert({first_name: "Joe", last_name: "Biden", age: 75, gender: "male", location: "38.9108325, -75.52766989999998"}),
        knex('users').insert({first_name: "Barack", last_name: "Obama", age: 56, gender: "male", location: "53.2734, -7.778320310000026"}),
        knex('users').insert({first_name: "Jazz", last_name: "Dibs", age: 18, gender: "female", location: "45.4963839, -73.57059649999997"}),
        knex('users').insert({first_name: "Jill", last_name: "Fens", age: 19, gender: "female", location: "13.193887, -59.54319799999996"}),
        knex('users').insert({first_name: "Jimbo", last_name: "Binsd", age: 25, gender: "male", location: "38.9108325, -75.52766989999998"}),
        knex('users').insert({first_name: "Billy", last_name: "Orack", age: 46, gender: "male", location: "53.2734, -7.778320310000026"}),
        knex('users').insert({first_name: "Abie", last_name: "asDibs", age: 68, gender: "female", location: "45.4963839, -73.57059649999997"}),
        knex('users').insert({first_name: "Azazel", last_name: "weFens", age: 28, gender: "female", location: "13.193887, -59.54319799999996"}),
        knex('users').insert({first_name: "Matt", last_name: "Damon", age: 55, gender: "male", location: "38.9108325, -75.52766989999998"}),
        knex('users').insert({first_name: "Helen", last_name: "Mirren", age: 28, gender: "female", location: "45.4963839, -73.57059649999997"}),
        knex('users').insert({first_name: "Nathalie", last_name: "Portman", age: 18, gender: "female", location: "13.193887, -59.54319799999996"}),
        knex('users').insert({first_name: "Lorne", last_name: "Michaels", age: 18, gender: "male", location: "38.9108325, -75.52766989999998"}),
        knex('users').insert({first_name: "Lisa", last_name: "Loeb", age: 38, gender: "female", location: "45.4963839, -73.57059649999997"}),
        knex('users').insert({first_name: "Buffy", last_name: "Summers", age: 48, gender: "female", location: "13.193887, -59.54319799999996"}),
        knex('users').insert({first_name: "Xander", last_name: "Harris", age: 35, gender: "male", location: "38.9108325, -75.52766989999998"}),
        knex('users').insert({first_name: "Seth", last_name: "Green", age: 58, gender: "female", location: "45.4963839, -73.57059649999997"}),
        knex('users').insert({first_name: "Briana", last_name: "Trent", age: 32, gender: "female", location: "13.193887, -59.54319799999996"}),
        knex('users').insert({first_name: "Hugh", last_name: "Jackman", age: 55, gender: "male", location: "38.9108325, -75.52766989999998"})
      ]);
    });
};