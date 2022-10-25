const express = require('express');
const mongoose = require('mongoose')
const dotenv = require('dotenv');

dotenv.config({ path: './config/config.env'});

const app = express();
app.use(express.json());

//Routes
app.use('/users', require('./routes/users'))


const PORT = process.env.PORT || 8080;

const dbURI = process.env.MONGO_URI_LOCAL; //MONGO_URI

mongoose.connect(dbURI)
  .then((result) => app.listen(PORT, () => console.log(`Server is Running on PORT:${PORT}`)))  
  .catch((err) => console.log(err));
