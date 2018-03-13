exports.seed = function(knex, Promise) {
  return knex('filters')
    .then(function () {
      return Promise.all([
        knex('filters').insert({userid: 1, min_age: 18, max_age: 28, female: true, male: false, other: false, radius: 15}),
        knex('filters').insert({userid: 2, min_age: 23, max_age: 35, female: true, male: true, other: true, radius: 20}),
        knex('filters').insert({userid: 3, min_age: 40, max_age: 80, female: false, male: true, other: false, radius: 100}),
        knex('filters').insert({userid: 4, min_age: 40, max_age: 80, female: false, male: true, other: false, radius: 100}),
        knex('filters').insert({userid: 5, min_age: 40, max_age: 80, female: true, male: true, other: false, radius: 50})
      ]);
    });
};