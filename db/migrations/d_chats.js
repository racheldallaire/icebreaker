exports.up = function(knex, Promise) {
  return Promise.all([
     knex.schema.createTable('chats', function(table){
      table.increments('id').primary().unsigned();
      table.integer('userlikesid').unsigned().notNullable().references('id').inTable('userlikes').onDelete('CASCADE').index();
    })
  ]);
};

exports.down = function(knex, Promise) {
 return Promise.all([
     knex.schema.dropTable('chats')
   ]);
};
