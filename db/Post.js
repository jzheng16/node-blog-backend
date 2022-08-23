const knex = require('knex');

module.exports = () => {
  knex.schema.createTable('posts', function (table) {
    table.increments();
    table.string('title');
    table.string('description');
    table.date('published_on');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.integer('duration');
    table.json('body');
  });
}
