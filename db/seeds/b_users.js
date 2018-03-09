exports.seed = function(knex, Promise) {
  return knex('users')
    .then(function () {
      return Promise.all([
        knex('users').insert({first_name: "Rachie", last_name: "D", age: 23, gender: "female", location: "45.4963839, -73.57059649999997"}),
        knex('users').insert({first_name: "Rihanna", last_name: "Fenty", age: 30, gender: "female", location: "13.193887, -59.54319799999996"}),
        knex('users').insert({first_name: "Joe", last_name: "Biden", age: 75, gender: "male", location: "38.9108325, -75.52766989999998"}),
        knex('users').insert({first_name: "Barack", last_name: "Obama", age: 56, gender: "male", location: "53.2734, -7.778320310000026"})
      ]);
    });
};