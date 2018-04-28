var mongoose = require('mongoose');







var iss = mongoose.Schema({
	Username: {
		type: String
	},
	grade: {
		type: String
	}

});


var iss = module.exports = mongoose.model('iss', iss);
module.exports.addmis = function(newmis){newmis.save();}
