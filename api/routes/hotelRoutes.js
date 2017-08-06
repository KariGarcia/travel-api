module.exports                  = function(router) {
	
  var hotelCtrl                 = require('./../controllers/hotelController.js');

	router.route('/hotels')  
	  .get(hotelCtrl.getAll)

};