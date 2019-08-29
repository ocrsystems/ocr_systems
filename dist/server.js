'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _httpErrors = require('http-errors');

var _httpErrors2 = _interopRequireDefault(_httpErrors);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _index = require('./routes/index');

var _index2 = _interopRequireDefault(_index);

var _upload = require('./routes/upload');

var _upload2 = _interopRequireDefault(_upload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.set('views', _path2.default.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use((0, _morgan2.default)('dev'));
app.use(_bodyParser2.default.urlencoded({ limit: '50mb', extended: true }));
app.use(_bodyParser2.default.json({ limit: '50mb', extended: true }));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use((0, _cookieParser2.default)());
app.use(_express2.default.static(_path2.default.join(__dirname, 'public')));

app.use('/', _index2.default);
app.use('/upload', _upload2.default);

app.use(function (req, res, next) {
  return next((0, _httpErrors2.default)(404));
});

app.use(function (err, req, res) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

var PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log('App listening to ' + PORT + '....');
  console.log('Press Ctrl+C to quit.');
});