var mongoose = require('mongoose');







var kop = mongoose.Schema({
	Username: {
		type: String
	},
	grade: {
		type: String
	}

});


var kop = module.exports = mongoose.model('kop', kop);
module.exports.addmis = function(newmis){newmis.save();}
