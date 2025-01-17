const { Pool } = require('pg')

const pool = new Pool({

user: "postgres",
host: "localhost",
database: "bioskop_database",
password: "1234",
port: 5432
})

module.exports = pool;


// "username": "postgres",
// "password": "1234",
// "database": "bioskop_database",
// "host": "127.0.0.1",
// "dialect": "postgres"
// },

