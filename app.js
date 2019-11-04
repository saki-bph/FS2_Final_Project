var createError = require('http-errors');
var express = require('express');
var path = require('path');
var firebase = require('firebase');
var firebaseConfig = {
    apiKey: "AIzaSyCC8RZO4fEufHbgd3cJge7tnVwHflAE_o0",
    authDomain: "pokemon-team-builder-28e65.firebaseapp.com",
    databaseURL: "https://pokemon-team-builder-28e65.firebaseio.com",
    projectId: "pokemon-team-builder-28e65",
    storageBucket: "pokemon-team-builder-28e65.appspot.com",
    messagingSenderId: "249680114148",
    appId: "1:249680114148:web:3cb75f7745522823ac57f1",
    measurementId: "G-LVH1G9G2HK"
  };
firebase.initializeApp(firebaseConfig);

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var mainRouter = require('./routes/main');  //Import routes for "catalog" area of site

var compression = require('compression');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(compression()); // Compress all routes

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/main', mainRouter);  // Add catalog routes to middleware chain.

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

module.exports = app;
