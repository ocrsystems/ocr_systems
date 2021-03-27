import express from 'express';
import upload from '../../middleware/uploadMiddleware';
import uploadController from './upload';

const router = express.Router();

router.get('/', (req, res) => res.render('tesseract', { title: 'Tesseract' }));

router.post('/upload', upload.single('image'), uploadController);

export default router;
