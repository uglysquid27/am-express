var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
const multer = require('multer');
const upload = multer()
var indexRouter = require('./routes/index');
// var tesRouter = require('./routes/tes');
var prRouter = require('./routes/pr-router');
var temuanH = require('./routes/temuan-h-router');
var temuanD = require('./routes/temuan-d-router');
var usersRouter = require('./routes/user-router');
var sapRouter = require('./routes/sap-router');
var actRouter = require('./routes/activity');
const { checkDatabaseConnection, iot_prod, sap_master } = require('./config/connection');
const cnt = require('./controllers/pr-controller');

var app = express();
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
  });
  app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(upload.array());
app.use('/', indexRouter);

// app.use('/tes', tesRouter);
app.use('/pr', prRouter);
app.use('/sap', sapRouter);
app.use('/temuan', temuanH);
app.use('/temuand', temuanD);
app.use('/users', usersRouter);
app.use('/act', actRouter);

checkDatabaseConnection(iot_prod)

module.exports = app;
