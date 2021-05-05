import express from 'express';
import tesseractRouter from './tesseract';
import neuralRouter from './neural';
import createError from 'http-errors';

const router = express.Router();

router.get('/', (req, res) => res.render('index', { title: 'OCR Systems' }));

router.use('/tesseract', tesseractRouter);
router.use('/neural', neuralRouter);

router.use((req, res, next) => next(createError(403)));

export default router;
