var mongoose = require('mongoose');







var security = mongoose.Schema({
	Username: {
		type: String
	},
	grade: {
		type: String
	}

});


var security = module.exports = mongoose.model('security', security);
module.exports.addmis = function(newmis){newmis.save();}
