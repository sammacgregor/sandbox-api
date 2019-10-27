// 'user strict';

// var mysql = require('mysql');

// //local mysql db connection
// var connection = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'system.user',
//     password : 'password'
// });

// connection.connect(function(err) {
//     if (err) throw err;
// });

// module.exports = connection;



const { Client, Pool } = require('pg')
const connectionString = process.env.DATABASE_URI

const pool = new Pool({
  connectionString: connectionString
});

pool.connect();
module.exports = pool;