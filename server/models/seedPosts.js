const Post = require('./Post');

Post.bulkCreate([
  { title: 'first recipe', body: 'Hello world' },
  { title: 'second recipe', body: 'goodbye world' },
  { title: 'third recipe', body: 'Hello how is everybody doing' }
]);
