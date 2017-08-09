var express    					= require('express');
var app        					= express();
var bodyParser 					= require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port 						= process.env.PORT || 8080;
var router 						= express.Router();
var hotelRoutes 				= require('./api/routes/hotelRoutes.js')(router);

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})
app.use('/api', router);

app.listen(port);
console.log('Magic happens on port ' + port);