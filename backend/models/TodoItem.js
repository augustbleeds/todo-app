import mongoose from 'mongoose';

const todoItemSchema = new mongoose.Schema({
  task: {
    type: String,
    require: true
  },
  completed: {
    type: Boolean,
    default: false
  }
});

const TodoItem = mongoose.model('Todo', todoItemSchema);

export default TodoItem;
