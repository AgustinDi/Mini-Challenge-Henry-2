const server = require('./src/app.js');
const { Type, conn } = require('./src/db.js');
const axios = require('axios');

conn.sync({ force: true }).then(() => {
  server.listen(process.env.PORT || 3001, async () => {
    
  });
});
