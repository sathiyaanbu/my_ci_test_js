module.exports = function(app) {
  var serviceList = require('../controllers/serviceListControllers');

  // todoList Routes
  app
    .route('/services')
    .get(serviceList.list_all_services)
    .post(serviceList.create_a_service);

  app
    .route('/services/:serviceId')
    .get(serviceList.read_a_service)
    .put(serviceList.update_a_service);
};
