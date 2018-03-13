exports.up = function(knex, Promise) {
  return Promise.all([
     knex.schema.createTable('userlikes', function(table){
      table.increments('id').primary().unsigned();
      table.integer('userid1').unsigned().notNullable().references('id').inTable('users').onDelete('CASCADE').index();
      table.integer('userid2').unsigned().notNullable().references('id').inTable('users').onDelete('CASCADE').index();
      table.boolean('liked');
    })
  ]);
};

exports.down = function(knex, Promise) {
 return Promise.all([
     knex.schema.dropTable('userlikes')
   ]);
};

