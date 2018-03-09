exports.seed = function(knex, Promise) {
  return knex('userlikes')
    .then(function () {
      return Promise.all([
        knex('userlikes').insert({userid1: 1, userid2: 2}),
        knex('userlikes').insert({userid1: 2, userid2: 1}),
        knex('userlikes').insert({userid1: 3, userid2: 4}),
        knex('userlikes').insert({userid1: 4, userid2: 3})
      ]);
    });
};