const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use('/assets', express.static(__dirname + '/public'));

app.use('/', (req, res, next) => {
  console.log(`Request URL: ${req.url}`)
  next();
});

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/person/:id', (req, res) => {
  res.render('person', { ID: req.params.id, Qstr: req.query.qstr  });
});

app.post('/person', urlencodedParser, (req, res) => {
  res.send('Thank you');
  console.log(req.body.firstname);
  console.log(req.body.lastname);
});

app.get('/api', (req, res) => {
  res.json({ firstname: 'Rhys', lastname: 'Diab' });
});

app.get('/person/:id', (req, res) => {
  res.send(`<html><head></head><body><h1>Person: ${req.params.id}</h1></body></html>`);
});

app.listen(port);
