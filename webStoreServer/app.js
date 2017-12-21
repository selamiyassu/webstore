// app.js
var express = require('express');
var app = express();
var db = require('./db');
//start
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongo = require('mongoskin');
var cors = require('cors');
var jwt = require('express-jwt');
var jwks = require('jwks-rsa');

//import routing modules 
const UserController = require('./api/controllers/UserController');
const CustomerController = require('./api/controllers/CustomerController');
const ProductController = require('./api/controllers/ProductController');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, './server/views'));
app.set('view engine', 'ejs');
app.disable('x-poweres-by');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, './server/public')));
app.use(cors());


// API location url
app.use('/users', UserController);
app.use('/customers', CustomerController);
app.use('/products', ProductController);

// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
//end
module.exports = app;