exports.seed = function(knex, Promise) {
  return knex('messages')
    .then(function () {
      return Promise.all([
        knex('messages').insert({id: 1, userlikesid: 1, content: 'hey' , timestamp: '1999-01-08 04:05:06'}),
        knex('messages').insert({id: 2, userlikesid: 1, content: 'hi' , timestamp: '1998-02-05 02:07:21'}),
        knex('messages').insert({id: 3, userlikesid: 2, content: 'aloha' , timestamp: '1995-01-25 13:19:02'}),
        knex('messages').insert({id: 4, userlikesid: 2, content: 'salut' , timestamp: '1995-01-25 13:20:33'})
      ]);
    });
};