var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ServiceSchema = new Schema({
  Service: {
    type: String
  },
  Company: {
    type: String
  },
  Price: {
    type: String
  },
  Description: {
    type: String
  },

  Location: {
    type: String
  }
});

module.exports = mongoose.model('Services', ServiceSchema);
