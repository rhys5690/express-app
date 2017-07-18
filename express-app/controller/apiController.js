const jsonParser = bodyParser.json()

module.exports = (app) => {
  app.post('/api/person', jsonParser, (req, res) => {
    //Save to database
  });

  app.get('/api/person/:id', (req, res) => {
    //Get the data from the database
    res.json({ firstname: 'Rhys', lastname: 'Diab' });
  });

  app.delete('/api/person/:id', (req, res) => {
    //Delete from the database
  });
}
