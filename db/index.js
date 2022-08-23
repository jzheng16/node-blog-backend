const knex = require('knex')({
  client: 'pg',
  connection: {
    host: 'localhost',
    port: 5432,
    user: 'joey',
    password: 'Natasha1',
    database: 'blog'
  }
});

module.exports = knex;