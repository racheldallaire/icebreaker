exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('messages').del(),
    knex('chats').del(),
    knex('userlikes').del(),
    knex('filters').del(),
    knex('users').del()
  ]);
};