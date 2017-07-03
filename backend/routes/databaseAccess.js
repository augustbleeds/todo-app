import express from 'express';
import TodoItem from '../models/TodoItem';

const router = express.Router();

router.post('/add', (req, res) => {
  var newItem = new TodoItem({taskText: req.body.taskText})

  newItem.save()
    .then(response => res.send(response) )
    .catch(err => res.send(err) )
});

export default router;
