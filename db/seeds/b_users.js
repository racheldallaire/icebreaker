exports.seed = function(knex, Promise) {
  return knex('users')
    .then(function () {
      return Promise.all([
        knex('users').insert({first_name: "Rachie", last_name: "D", age: 23, gender: "female", location: "45.4963839, -73.57059649999997"}),
        knex('users').insert({first_name: "Rihanna", last_name: "Fenty", age: 30, gender: "female", location: "13.193887, -59.54319799999996"}),
        knex('users').insert({first_name: "Joe", last_name: "Biden", age: 75, gender: "male", location: "38.9108325, -75.52766989999998"}),
        knex('users').insert({first_name: "Barack", last_name: "Obama", age: 56, gender: "male", location: "53.2734, -7.778320310000026"}),
        knex('users').insert({first_name: "Jazz", last_name: "Dibs", age: 18, gender: "female", location: "45.4963839, -73.57059649999997"}),
        knex('users').insert({first_name: "Jill", last_name: "Fens", age: 18, gender: "female", location: "13.193887, -59.54319799999996"}),
        knex('users').insert({first_name: "Jimbo", last_name: "Binsd", age: 55, gender: "male", location: "38.9108325, -75.52766989999998"}),
        knex('users').insert({first_name: "Billy", last_name: "Orack", age: 46, gender: "male", location: "53.2734, -7.778320310000026"}),
        knex('users').insert({first_name: "Abie", last_name: "asDibs", age: 18, gender: "female", location: "45.4963839, -73.57059649999997"}),
        knex('users').insert({first_name: "asJill", last_name: "weFens", age: 18, gender: "female", location: "13.193887, -59.54319799999996"}),
        knex('users').insert({first_name: "asJimbo", last_name: "Bweinsd", age: 55, gender: "male", location: "38.9108325, -75.52766989999998"}),
        knex('users').insert({first_name: "caJazz", last_name: "Diwebs", age: 18, gender: "female", location: "45.4963839, -73.57059649999997"}),
        knex('users').insert({first_name: "caJill", last_name: "eeFens", age: 18, gender: "female", location: "13.193887, -59.54319799999996"}),
        knex('users').insert({first_name: "caJimbo", last_name: "Biwensd", age: 55, gender: "male", location: "38.9108325, -75.52766989999998"}),
        knex('users').insert({first_name: "deJazz", last_name: "Dwewibs", age: 18, gender: "female", location: "45.4963839, -73.57059649999997"}),
        knex('users').insert({first_name: "deJill", last_name: "weFens", age: 18, gender: "female", location: "13.193887, -59.54319799999996"}),
        knex('users').insert({first_name: "deJimbo", last_name: "weBinsd", age: 55, gender: "male", location: "38.9108325, -75.52766989999998"}),
        knex('users').insert({first_name: "weJazz", last_name: "Dirbs", age: 18, gender: "female", location: "45.4963839, -73.57059649999997"}),
        knex('users').insert({first_name: "weJill", last_name: "Fefassdns", age: 18, gender: "female", location: "13.193887, -59.54319799999996"}),
        knex('users').insert({first_name: "weJimbo", last_name: "Bdfdsinsd", age: 55, gender: "male", location: "38.9108325, -75.52766989999998"})
      ]);
    });
};