var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

//import routes
var routes = require('./api/routes/usersRoute');
//register routes
routes(app);

app.listen(port);

console.log('NodeJS API server started on: ' + port);