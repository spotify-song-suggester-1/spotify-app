
exports.up = function(knex) {
    return knex.schema.createTable('users', tbl => {
        tbl.increments();
        tbl.text('username', 128).unique().notNullable();
        tbl.text('password',128).notNullable();
        tbl.text('email',128).notNullable();
    });
  
};

exports.down = function(knex) {
    //drops the table
    return knex.schema.dropTableIfExists('users');
  
};
