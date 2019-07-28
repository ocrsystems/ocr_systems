import path from 'path';
import express from 'express';
import createError from 'http-errors';
import cookieParser from 'cookie-parser';
import webpack from 'webpack';
import logger from 'morgan';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from './webpack.config';
import indexRouter from './routes/index';
import uploadRouter from './routes/upload';

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(webpackMiddleware(webpack(webpackConfig)));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/upload', uploadRouter);

app.use((req, res, next) => next(createError(404)));

app.use((err, req, res) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App listening to ${PORT}....`);
  console.log('Press Ctrl+C to quit.');
});
