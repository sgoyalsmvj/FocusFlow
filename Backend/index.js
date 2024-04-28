import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectToMongoDB from './db/connectToMongoDB.js';

dotenv.config();

const app = express();

app.get('/', (req, res)  => {
  res.send('Hello Worl');
})

app.listen(3000, () => {
  connectToMongoDB();
  console.log('Server is running on port 3000');
})
