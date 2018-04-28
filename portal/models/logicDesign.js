var mongoose = require('mongoose');







var logic = mongoose.Schema({
	Username: {
		type: String
	},
	grade: {
		type: String
	}

});


var logic = module.exports = mongoose.model('logic', logic);
module.exports.addmis = function(newmis){newmis.save();}
