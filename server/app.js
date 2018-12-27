import app from './server';
require('dotenv').config();

const PORT = process.env.PORT || 8000;

app.listen(PORT, err => {
  if (err) return console.log(`Encountered an error: ${err}`);
  console.log(`API is running on this port == ${PORT}`);
});
