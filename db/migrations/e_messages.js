exports.up = function(knex, Promise) {
  return Promise.all([
     knex.schema.createTable('messages', function(table){
      table.integer('userid').unsigned().notNullable().references('id').inTable('users').onDelete('CASCADE').index();
      table.integer('chatid').unsigned().notNullable().references('id').inTable('chats').onDelete('CASCADE').index();
      table.string('content');
      table.string('timestamp');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
     knex.schema.dropTable('messages')
   ]);
};
