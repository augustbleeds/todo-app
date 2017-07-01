import express from 'express';
const router = express.Router();

router.get('/add', (req, res) => {
  res.send('Helloa');
});

export default router;
