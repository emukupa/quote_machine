const quotes = require('../../process/q.json');
module.exports = app => {
  app.get('/', (req, res) => {
    res.send('Hello Quotes World');
  });

  app.get('/quotes', (req, res) => {
    //TODO
    res.status(200).json(quotes);
  });
};
