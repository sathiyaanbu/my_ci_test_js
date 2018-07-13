module.exports = function(app) {
  var serviceList = require('../controllers/serviceListControllers');

  // todoList Routes
  app
    .route('/api/services')
    .get(serviceList.list_all_services)
    .post(serviceList.create_a_service);

  app.route('/api/services/:serviceId').get(serviceList.read_a_service);
};
