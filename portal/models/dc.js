var mongoose = require('mongoose');







var dc = mongoose.Schema({
	Username: {
		type: String
	},
	grade: {
		type: String
	}

});


var dc = module.exports = mongoose.model('dc', dc);
module.exports.addmis = function(newmis){newmis.save();}
