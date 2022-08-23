const knex = require('./index');
const sync = async () => {
  try {
    await knex.schema.dropTableIfExists('posts');
    const x = await knex.schema.createTable('posts', function (table) {
      table.increments();
      table.string('title').unique();
      table.string('description');
      table.date('published_on').defaultsTo(knex.fn.now());
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.integer('duration');
      table.string('body');
    });
  
    console.log(x);
  } catch(e) {
    console.log(e);
  }

}
sync();