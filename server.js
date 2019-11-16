require('dotenv').config();
const express = require('express'),
  app = express(),
  bodyParser = require('body-parser');
port = process.env.PORT || 3001;

var cors = require('cors');

// app.use(cors());

// Set up a whitelist and check against it:                                      
var whitelist = ['http://localhost:3000', 'https://stormy-lake-69799.herokuapp.com', 'https://murmuring-sierra-48059.herokuapp.com', 'https://glacial-castle-04802.herokuapp.com']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Origin:' + origin + ' - Not allowed by CORS'))
    }
  },
  credentials: true
}

// Then pass them to cors:
app.use(cors(corsOptions));


app.listen(port);

console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// sessions
var session = require('express-session')
const redis = require('redis');
const redisStore = require('connect-redis')(session);
var client = redis.createClient({url: process.env.REDIS_URL, no_ready_check: true});



app.use(session({
  secret: 'keyboard cat',
  store: new redisStore(
    { host: 'localhost', 
    port: 6379, 
    client: client, 
    ttl: 260 }),
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false, expires: new Date(Date.now() + (1 * 86400 * 1000)) }
}))

var users = require('./api/User/v1/routes');
users(app);

var items = require('./api/Item/v1/routes');
items(app);

var sprints = require('./api/Sprint/v1/routes');
sprints(app);


var boards = require('./api/Board/v1/routes');
boards(app);

var auth = require('./api/Auth/v1/routes');
auth(app);


// var customer = require('./api/Customer/v1/routes'); //importing route
// var routes = require('./api/Tasks/v1/routes'); //importing route
// routes(app); //register the route