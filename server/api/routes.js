import quotes from '../../process/q.json';
export default app => {
  app.get('/', (req, res) => {
    res.send('Hello Quotes World Again');
  });

  app.get('/quotes', (req, res) => {
    //TODO
    res.status(200).json(quotes);
  });
};
