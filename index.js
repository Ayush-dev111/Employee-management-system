const express = require('express');
const mongoose = require('mongoose');
const {engine} = require('express-handlebars');
const connectDb = require('./models/database');
const router = require('./controllers/routes')
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3500;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

connectDb();  

app.use("/employee", router);

app.get('/', (req, res) => {
  res.render('home');
});


app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});