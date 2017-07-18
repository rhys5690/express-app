const express = require('express');


const app = express();
const apiController = require('./controller/apiController');
const htmlController = require('./controller/htmlController');

const port = process.env.PORT || 3000;


app.use('/assets', express.static(__dirname + '/public'));

app.use('/', (req, res, next) => {
  console.log(`Request URL: ${req.url}`)
  next();
});

app.set('view engine', 'ejs');

htmlController(app);
apiController(app);
app.listen(port);
