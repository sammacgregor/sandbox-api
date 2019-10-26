const express = require('express'),
  app = express(),
  bodyParser = require('body-parser');
  port = process.env.PORT || 3001;

  var cors = require('cors');

  app.use(cors());

// Set up a whitelist and check against it:
var whitelist = ['http://localhost:3000']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

// Then pass them to cors:
app.use(cors(corsOptions));


const mysql = require('mysql');
// connection configurations
const mc = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    db: 'AuditLog'
});
 
// connect to database
mc.connect();

app.listen(port);

console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());




var customers = require('./api/Customer/v1/routes');
customers(app);


var tasks = require('./api/Tasks/v1/routes');
tasks(app);

var users = require('./api/User/v1/routes');
users(app);

var items = require('./api/Item/v2/routes');
items(app);

var sprints = require('./api/Sprint/v1/routes');
sprints(app);


var boards = require('./api/Board/v1/routes');
boards(app);

// var customer = require('./api/Customer/v1/routes'); //importing route
// var routes = require('./api/Tasks/v1/routes'); //importing route
// routes(app); //register the route