
exports.up = function(knex, Promise) {
    return knex.schema.table('users', function (table) {
    table.string('lovemale');
    table.string('lovefemale');
    table.string('loveother');
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.table('users', function (table) {
    table.dropColumn('lovemale');
    table.dropColumn('lovefemale');
    table.dropColumn('loveother');
  });
};