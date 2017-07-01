import express from 'express';
import TodoItem from '../models/TodoItem';

const router = express.Router();

router.get('/add', (req, res) => {
  var newItem = new TodoItem({task: 'Do the dishes!'})

  newItem.save()
    .then(response => res.send(response) )
    .catch(err => res.send(err) )
});

export default router;
