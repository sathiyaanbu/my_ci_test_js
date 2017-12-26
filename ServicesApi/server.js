var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Service = require('./api/models/serviceListModels'), //created model loading here
  bodyParser = require('body-parser');
const config = require('./api/config');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(config.mongoURI);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/serviceListRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
