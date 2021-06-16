import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  console.log('Test get request ###');
  console.log('Test get req###', req);
  res.send(true);
});

router.post('/', (req, res) => {
  console.log('Test post request ###');
  console.log('Test post req###', req.body);
  res.send(true);
});

export default router;
