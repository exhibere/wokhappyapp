const happinessController = require('../controllers').happiness;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Work Happy API!',
  }));

  app.post('/api/happiness', happinessController.create);
};