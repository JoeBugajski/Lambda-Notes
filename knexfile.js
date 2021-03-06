// Update with your config settings.
require('dotenv').config();
const localPg = {
  host: 'localhost',
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS
};
const dbConnection = process.env.DATABASE_URL || localPg;
module.exports = {
  dbConnection,
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/lambdaNotes.sqlite3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
      tablename: 'dbmigrations',
    },
    seeds: { directory: './data/seeds/development'}
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tablename: 'dbmigrations',
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds/production'
    }
  },
};
