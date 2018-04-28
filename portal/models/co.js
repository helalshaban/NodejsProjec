var mongoose = require('mongoose');







var co = mongoose.Schema({
	Username: {
		type: String
	},
	grade: {
		type: String
	}

});


var co = module.exports = mongoose.model('co', co);
module.exports.addmis = function(newmis){newmis.save();}
