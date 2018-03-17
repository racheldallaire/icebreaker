exports.up = function(knex, Promise) {
  return Promise.all([
     knex.schema.createTable('messages', function(table){
      table.increments('id').primary().unsigned();
      table.integer('userlikesid').unsigned().notNullable().references('id').inTable('chats').onDelete('CASCADE').index();
      table.string('content');
      table.timestamp('timestamp').defaultTo(knex.fn.now());
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
     knex.schema.dropTable('messages')
   ]);
};
