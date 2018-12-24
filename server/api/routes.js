const quotes = require('../../process/q.json');

module.exports = app => {
  app.get('/', (req, res) => {
    res.send('Hello Royes');
  });

  app.get('/quotes', (req, res) => {
    res.status(200).json(quotes);
  });
};
