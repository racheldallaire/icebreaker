exports.seed = function(knex, Promise) {
  return knex('filters')
    .then(function () {
      return Promise.all([
        knex('filters').insert({userid: 1, min_age: 18, max_age: 60, female: "female", male:  null, other: "other", radius: 15}),
        knex('filters').insert({userid: 2, min_age: 23, max_age: 35, female: "female", male:  null, other: "other", radius: 20}),
        knex('filters').insert({userid: 3, min_age: 40, max_age: 80, female: null, male: "male", other: null, radius: 100}),
        knex('filters').insert({userid: 4, min_age: 40, max_age: 80, female: null, male: "male", other: null, radius: 100}),
        knex('filters').insert({userid: 5, min_age: 18, max_age: 28, female: "female", male:  null, other: null, radius: 15}),
        knex('filters').insert({userid: 6, min_age: 23, max_age: 35, female: "female", male:  null, other: "other", radius: 20}),
        knex('filters').insert({userid: 7, min_age: 40, max_age: 80, female: null, male: "male", other: null, radius: 100}),
        knex('filters').insert({userid: 8, min_age: 18, max_age: 28, female: "female", male:  null, other: null, radius: 15}),
        knex('filters').insert({userid: 9, min_age: 23, max_age: 35, female: "female", male:  null, other: "other", radius: 20}),
        knex('filters').insert({userid: 10, min_age: 40, max_age: 80, female: null, male: "male", other: null, radius: 100}),
        knex('filters').insert({userid: 11, min_age: 40, max_age: 80, female: null, male: "male", other: null, radius: 100}),
        knex('filters').insert({userid: 12, min_age: 18, max_age: 28, female: "female", male:  null, other: null, radius: 15}),
        knex('filters').insert({userid: 13, min_age: 23, max_age: 35, female: "female", male:  null, other: "other", radius: 20}),
        knex('filters').insert({userid: 14, min_age: 18, max_age: 80, female: "female", male: "male", other:"other", radius: 100})
      ]);
    });
};