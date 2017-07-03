import express from 'express';
import TodoItem from '../models/TodoItem';

const router = express.Router();

// add new item to DB
router.post('/add', (req, res) => {
  var newItem = new TodoItem({taskText: req.body.taskText})
  newItem.save()
    .then(savedItem => res.send(savedItem) )
    .catch(err => res.send(err))
});

// get all items in DB
router.get('/all', (req, res) => {
  TodoItem.find()
    .then(foundItems => res.send(foundItems))
    .catch(err => res.send(err))
});

// after toggling data, get all items in DB
router.post('/toggle', (req, res) => {
  const toggleId = req.body.toggleId;
  // find, update, save
  const itemPromise = TodoItem.findById(toggleId);
  const savePromise = itemPromise
    .then(foundItem => {
      foundItem.completed = !foundItem.completed;
      return foundItem.save();
    });
  const returnAllPromise = savePromise
    .then(savedItem => {
      return TodoItem.find({});
    });
  returnAllPromise
    .then(foundItems => res.send(foundItems))
    .catch(err => res.send(err));
});

// after removing data, get all items in DB
router.post('/remove', (req, res) => {
  const removeId = req.body.removeId;
  const itemPromise = TodoItem.findById(removeId);
  const removePromise = itemPromise
    .then(foundItem => foundItem.remove());
  const returnAllPromise = removePromise
    .then(removedItem => TodoItem.find({}));
  returnAllPromise
    .then(foundItems => res.send(foundItems))
    .catch(err => res.send(err));
});


export default router;
