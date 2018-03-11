
exports.up = function(knex, Promise) {
    return knex.schema.table('users', function (table) {
    table.string('description');
    table.string('facebook_id');
    table.string('facebook_picture_url');
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.table('users', function (table) {
    table.dropColumn('description');
    table.dropColumn('facebook_id');
    table.dropColumn('facebook_picture_url');
  });
};