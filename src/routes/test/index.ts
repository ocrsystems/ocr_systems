import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  console.log('Test get request ###');
  console.log('Test get req###', req);
});

router.post('/', (req, res) => {
  console.log('Test post request ###');
  console.log('Test post req###', req.body);
});

export default router;
