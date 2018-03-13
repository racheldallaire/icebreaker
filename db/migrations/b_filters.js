exports.up = function(knex, Promise) {
  return Promise.all([
     knex.schema.createTable('filters', function(table){
      table.increments('id').primary().unsigned();
      table.integer('userid').unsigned().notNullable().references('id').inTable('users').onDelete('CASCADE').index();
      table.integer('min_age');
      table.integer('max_age');
      table.string('female');
      table.string('male');
      table.string('other');
      table.integer('radius')
    })
  ]);
};

exports.down = function(knex, Promise) {
 return Promise.all([
     knex.schema.dropTable('filters')
   ]);
};
