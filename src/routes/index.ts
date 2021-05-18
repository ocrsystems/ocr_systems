import express from 'express';
import tesseractRouter from './tesseract';
import neuralRouter from './neural';
import createError from 'http-errors';

const router = express.Router();

router.get('/', (req, res) => res.render('index', { title: 'OCR Systems' }));

router.get('/api/ping', (req, res) => {
  console.log('TESTING::::');
  console.log('REQ::::', req);
  res.send({ status: 'Success', version: '1.0.0' });
});

router.use('/tesseract', tesseractRouter);
router.use('/neural', neuralRouter);

router.use((req, res, next) => next(createError(403)));

export default router;
