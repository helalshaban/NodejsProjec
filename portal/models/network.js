var mongoose = require('mongoose');







var network = mongoose.Schema({
	Username: {
		type: String
	},
	grade: {
		type: String
	}

});


var network = module.exports = mongoose.model('network', network);
module.exports.addmis = function(newmis){newmis.save();}
