const happinessController = require('../controllers').happiness;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Work Happy API!',
  }));
  
  app.post('/api/happiness', happinessController.create);
  app.get('/api/happiness', happinessController.list);
  app.get('/api/happiness/user/:userId', happinessController.retrieveForUser);
  app.get('/api/happiness/user', happinessController.retrieveForAll);
  
};