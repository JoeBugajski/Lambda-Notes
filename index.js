require('dotenv').config();
const { server } = require('./server.js');
const 

const port = process.env.PORT;
server.listen(port, () => {
  console.log(`\n === Notes Server listening on port ${port}`);
});