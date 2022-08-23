const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const knex = require('./db');

const PORT = process.env.PORT || 3001;

// Middleware
app.use(morgan('tiny'));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));



// Server
app.get('/posts', async (req, res) => {
  const posts = await knex('posts').select();
  res.json(posts);

});

app.post('/posts', async (req, res) => {
  try {
    const { title, description, body, duration } = req.body;
    // Update if title exists
    const id = await knex('posts').insert({ title, body, description, duration }, ['id']).onConflict('title').merge();
    res.json(id)
  } catch(err) {
    console.log(err);
  }

})


app.listen(PORT, () => {
  console.log(`server listening in on ${PORT}`);
})