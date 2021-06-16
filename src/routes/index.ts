import express from 'express';
import tesseractRouter from './tesseract';
import neuralRouter from './neural';
import testRouter from './test';
import createError from 'http-errors';

const router = express.Router();

router.get('/', (req, res) => res.render('index', { title: 'OCR Systems' }));

router.get('/api/ping', (req, res) => {
  setTimeout(() => console.log('setTimeout'), 0);
  setImmediate(() => console.log('setImmediate'));

  res.send({ status: 'Success', version: '1.0.0' });
});

router.use('/tesseract', tesseractRouter);
router.use('/neural', neuralRouter);
router.use('/test', testRouter);

router.use((req, res, next) => next(createError(403)));

export default router;
