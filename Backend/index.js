import express from 'express';
import dotenv from 'dotenv';
import connectToMongoDB from './db/connectToMongoDB.js';
import creatorRoutes from './routes/creatorRoutes.routes.js';
import studentRoutes from './routes/studentRoutes.routes.js';
import authRoutes from './routes/authRoutes.routes.js';

dotenv.config();

const app = express();

app.get('/', (req, res)  => {
  res.send('Hello World');
})

app.use('/api/creator', creatorRoutes);
app.use('/api/student', studentRoutes);
app.use('/api/auth', authRoutes);

app.listen(3000, () => {
  connectToMongoDB();
  console.log('Server is running on port 3000');
})
