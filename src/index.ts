import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import createError from 'http-errors';
// import logger from 'morgan';
import indexRouter from './routes/home';
import tesseractRouter from './routes/tesseract';
import neuralRouter from './routes/neural';
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
app.use('/tesseract', tesseractRouter);
app.use('/neural', neuralRouter);

app.use((req, res, next) => next(createError(404)));

app.use((err: Error, req: express.Request, res: express.Response) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(409);
  res.render('error');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`HTTP server is running 🚀 on port ${PORT}
  Process Pid: ${process.pid}`);
});
