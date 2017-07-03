import express from 'express';
import dbRoutes from './routes/databaseAccess';
import TodoItem from './models/TodoItem';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

// db connection
mongoose.connection.on('error', function(){
  console.log('Error connecting to database');
});
mongoose.connection.on('connected', function(){
  console.log('Successfully connected to database!');
})
mongoose.connect(process.env.MONGODB_URI);

// cross-origin resource sharing
app.use(cors());

// bodyParser
app.use(bodyParser.json());

// This line makes the build folder publicly available.
app.use(express.static('build'));

app.use('/db', dbRoutes);

app.listen(3000, () => {
  console.log('Server for React Todo App listening on port 3000!')
});
