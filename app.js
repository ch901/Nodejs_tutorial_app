var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

app.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });
  
  app.get('/user/:name/:age/:sex', function(req, res, next) {
    const user = {
      name: req.params.name,
      age: req.params.age,
      sex: req.params.sex
    };
    res.json(user);
  });
  
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

const port = process.env.PORT || 4000

app.listen(port)

module.exports = app;


