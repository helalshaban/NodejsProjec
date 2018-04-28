var mongoose = require('mongoose');







var mis = mongoose.Schema({
	Username: {
		type: String
	},
	grade: {
		type: String
	}

});


var mis = module.exports = mongoose.model('mis', mis);
module.exports.addmis = function(newmis){newmis.save();}
