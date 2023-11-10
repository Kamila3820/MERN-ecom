const express = require('express');
const env = require('dotenv');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');



//routes
const userRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin/auth');

//environment variable or you can sat constants
env.config();

//mongodb connection
//mongodb+srv://thanadonsaojarkaval:<password>@cluster0.0ct5whw.mongodb.net/?retryWrites=true&w=majority
mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.0ct5whw.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`, 
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  ).then(() => {
    console.log('Database connected');
  }).catch(err => {
    console.error('Database connection error:', err);
  });
  
  


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', userRoutes);
app.use('/api', adminRoutes);

app.listen(process.env.PORT, () => {
    console.log('Server is running on port '+ process.env.PORT);
});