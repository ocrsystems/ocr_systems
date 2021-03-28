import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
// import logger from 'morgan';
import indexRouter from './routes';
const ejsMate = require('ejs-mate');

const app = express();

app.set('views', path.join(`${__dirname}/client`, 'views'));
app.set('view engine', 'ejs');
app.engine('ejs', ejsMate);

// app.use(logger('dev'));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json({ limit: '50mb' }));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(`${__dirname}/client`, 'public')));

app.use('/', indexRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`HTTP server is running 🚀 on port ${PORT}
  Process Pid: ${process.pid}`);
});
