const express = require('express');
const mongoose = require('mongoose');
const {engine} = require('express-handlebars');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3500;

app.use(express.json());
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');


app.get('/', (req, res) => {
  res.render('home');
});


app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});