var home = require('./controllers/home');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongo = require('mongodb');
var mongoose = require('mongoose');
var expresslayout = require('express-ejs-layouts');
var opencourses = require('./models/opencourses');
mongoose.connect('mongodb://body:1234@ds241019.mlab.com:41019/todolist');
var db = mongoose.connection;
var routes = require('./routes/index');
var users = require('./routes/users');
var manager = require('./controllers/manager');
var managertwo = require('./controllers/managertwo');
var managerthree = require('./controllers/managerthree');
var managerfour = require('./controllers/managerfour');
var managerfive = require('./controllers/managerfive');
var managersix = require('./controllers/managersix');
var managerseven = require('./controllers/managerseven');
var managereight = require('./controllers/managereight');
var managernine = require('./controllers/managernine');
var managerten = require('./controllers/managerten');
var managereleven = require('./controllers/managereleven');
var managerstdreq = require('./controllers/managerstdreq');

var app = express();

//setup template engine
app.use(expresslayout);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//static files
app.use(express.static('./public'));

//fire controllers
home(app);


//download Material from StdMaterial
app.get('/download', function (req, res) {
  var filex = __dirname + req.query.file;
  res.download(filex);
});

app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}));

// Passport init
app.use(passport.initialize());
app.use(passport.session());

// Express Validator
app.use(expressValidator({
  errorFormatter: function (param, msg, value) {
    var namespace = param.split('.')
      , root = namespace.shift()
      , formParam = root;

    while (namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param: formParam,
      msg: msg,
      value: value
    };
  }
}));

// Connect Flash
app.use(flash());

// Global Vars
app.use(function (req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  next();
});


app.get('/logout', function (req, res) {
  req.logout();

  req.flash('success_msg', 'You are logged out');

  res.sendFile("c:/Users/gamal/Desktop/portal/public/html/template/index.html");
});
app.get('/log', ensureAuthenticated, function (req, res) {
  if (users.couser[0] == 'a') {

    res.sendFile("c:/Users/gamal/Desktop/portal/public/html/template/Admin.html");
  }

  else if (users.couser[0] == 'd') {
    ///////////////////////////////////////////////////////////////////////////////
    var x = "";
    for (var i = 0; i < users.couser.length - 1; i++) {
      x += users.couser[i + 1];
    }

    opencourses.opo.find({ "doctor": x }, function (err, response) {
      if (err) { console.log(err); }
      else {

        res.render('doctors/groups', { data: response });
      }

    });
  }

  else if (users.couser[0] == 's') {
    ///////////////////////////////////////////////////////////////////////////////

    res.redirect('/managerfive/stdhome');
  }



  else {

    res.sendFile("c:/Users/gamal/Desktop/portal/public/html/template/index.html");
  }

});

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();

  } else {

    res.redirect('/users/login');
  }
}
app.use('/users', users);
app.use('/manager', manager);
app.use('/managertwo', managertwo);
app.use('/managerthree', managerthree);
app.use('/managerfour', managerfour);
app.use('/managerfive', managerfive);
app.use('/managersix', managersix);
app.use('/managerseven', managerseven);
app.use('/managereight', managereight);
app.use('/managernine', managernine);
app.use('/managerten', managerten);
app.use('/managereleven', managereleven);
app.use('/managerstdreq', managerstdreq);

app.use(function (req, res) {
  res.sendFile("c:/Users/gamal/Desktop/portal/public/html/template/404.html");
});

//listen to port
app.listen(3000);
console.log('you are listening to port 3000 ! ');


