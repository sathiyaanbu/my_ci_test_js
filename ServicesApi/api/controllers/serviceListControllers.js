var mongoose = require('mongoose'),
  Service = mongoose.model('Services');

exports.list_all_services = function(req, res) {
  Service.find({}, function(err, service) {
    if (err) res.send(err);
    res.json(service);
  });
};

exports.create_a_service = function(req, res) {
  var new_service = new Service(req.body);
  new_service.save(function(err, service) {
    if (err) res.send(err);
    res.json(service);
  });
};

exports.read_a_service = function(req, res) {
  Service.findById(req.params.serviceId, function(err, service) {
    if (err) res.send(err);
    res.json(service);
  });
};
