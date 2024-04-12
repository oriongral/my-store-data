const {Client} = require('pg');

async function getConnection() {
  const client = new Client({
    user: 'ferbox',
    host: 'localhost',
    database: 'my_store',
    password: 'f3rb0x123',
    port: 5432,
  });
  await client.connect();
  return client;
}

module.exports = getConnection;
