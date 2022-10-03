const app = require('./app');
require('dotenv').config();
const port = 3000;

app.listen(port, async () => {
  console.log(`API TrybeCash está sendo executada na porta ${port}`);
});