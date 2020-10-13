const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const emailRouter = require('./api/server-router');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://Brandon:' + process.env.MONGO_ATLAS_PW + '@cluster0.x7r5x.mongodb.net/<dbname>?retryWrites=true&w=majority',
 {
   useNewUrlParser: true,
   useUnifiedTopology: true
 });

app.use((req, res, next) => {
  res.header('Acces-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  if(req.method === "OPTIONS"){
    res.header('Access-Control-Allow-Methods', 'POST')
    return res.status(200).json({});
  }
  next();
}); 

app.use('/contact', emailRouter);

app.use((req, res, next) => {
  const error = new Error('NOT FOUND');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  })
});

module.exports = app;