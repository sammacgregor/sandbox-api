require('dotenv').config();
const express = require('express'),
  app = express(),
  bodyParser = require('body-parser');
port = process.env.PORT || 3001;

var cors = require('cors');

app.use(cors());

// Set up a whitelist and check against it:                                      
var whitelist = ['http://localhost:3000', 'https://stormy-lake-69799.herokuapp.com', 'https://murmuring-sierra-48059.herokuapp.com', 'https://glacial-castle-04802.herokuapp.com']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Origin:' + origin + ' - Not allowed by CORS'))
    }
  }
}

// Then pass them to cors:
app.use(cors(corsOptions));



app.listen(port);

console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// sessions
var session = require('express-session')



app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false, expires: new Date(Date.now() + (1 * 86400 * 1000)) }
}))

var users = require('./api/User/v2/routes');
users(app);

var items = require('./api/Item/v2/routes');
items(app);

var sprints = require('./api/Sprint/v2/routes');
sprints(app);


var boards = require('./api/Board/v2/routes');
boards(app);

var auth = require('./api/Auth/v1/routes');
auth(app);


// var customer = require('./api/Customer/v1/routes'); //importing route
// var routes = require('./api/Tasks/v1/routes'); //importing route
// routes(app); //register the route