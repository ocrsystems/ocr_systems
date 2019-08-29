import express from 'express';
const router = express.Router();

router.get('/', function (req, res) {
  res.render('index', { title: 'OCR Systems' });
});

export default router;
