const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/', (req, res) => {
  res.render('home',{title:'Home'});
});
app.get('/about', (req, res) => {
  res.render('about',{title:'About'} );
});
app.get('/project', (req, res) => {
  res.render('project',{title:'Project'});
});
app.get('/contact', (req, res) => {
  res.render('contact',{title:'Contact'});
});

module.exports = app;
