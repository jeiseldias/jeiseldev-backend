exports.up = function(knex) {
    return knex.schema.createTable('jdv_jobs', function(table) {
        table.string('name', 100).notNullable();
        table.integer('year').unsigned().notNullable();
        table.string('description',250).notNullable();
        table.string('url',180).notNullable();
        table.string('repo',180).notNullable();

        table.primary(['name','year']);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('jdv_jobs');
};