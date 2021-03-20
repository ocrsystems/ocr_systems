import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import createError from 'http-errors';
// import logger from 'morgan';
import indexRouter from './routes/home';
import uploadRouter from './routes/upload';

const app = express();

app.set('views', path.join(`${__dirname}/client`, 'views'));
app.set('view engine', 'ejs');

// app.use(logger('dev'));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json({ limit: '50mb' }));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(`${__dirname}/client`, 'public')));

app.use('/', indexRouter);
app.use('/upload', uploadRouter);

app.use((req, res, next) => next(createError(404)));

// app.use((err, req, res) => {
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//   res.status(err.status || 500);
//   res.render('error');
// });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`HTTP server is running 🚀 on port ${PORT}
  Process Pid: ${process.pid}`);
});
