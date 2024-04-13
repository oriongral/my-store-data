const { Pool } = require('pg');

const pool = new Pool({
  user: 'ferbox',
  host: 'localhost',
  database: 'my_store',
  password: 'f3rb0x123',
  port: 5432,
});

module.exports = pool;
