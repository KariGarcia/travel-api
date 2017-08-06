exports.getAll                  = function(req, res) {

  var hotels                    = require('./../mocks/hotels.json');
  res.status(200).json(hotels);
  
};