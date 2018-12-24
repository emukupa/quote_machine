const app = require('./server');
require('dotenv').config();
const PORT = process.env.PORT || 8000;
app.listen(PORT, err => {
  if (err) return console.log(`Error encountered error: ${err}`);
  console.log(`Api is running at  ${PORT}`);
});
