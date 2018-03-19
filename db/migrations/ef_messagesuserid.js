
exports.up = function(knex, Promise) {
    return knex.schema.table('messages', function (table) {
    table.integer('userid').unsigned().notNullable().references('id').inTable('users').onDelete('CASCADE').index();
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.table('messages', function (table) {
    table.dropColumn('userid');
  });
};