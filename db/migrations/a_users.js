exports.up = function(knex, Promise) {
  return Promise.all([
     knex.schema.createTable('users', function(table){
      table.increments('id').primary().unsigned();
      table.string('first_name');
      table.string('last_name');
      table.integer('age');
      table.string('gender');
      table.string('location');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
     knex.schema.dropTable('users')
   ]);
};
