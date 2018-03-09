exports.seed = function(knex, Promise) {
  return knex('chats')
    .then(function () {
      return Promise.all([
        knex('chats').insert({userlikesid: 1}),
        knex('chats').insert({userlikesid: 2}),
        knex('chats').insert({userlikesid: 3}),
        knex('chats').insert({userlikesid: 4})
      ]);
    });
};