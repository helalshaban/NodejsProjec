var mongoose = require('mongoose');







var cs = mongoose.Schema({
	Username: {
		type: String
	},
	grade: {
		type: String
	}

});


var cs = module.exports = mongoose.model('cs', cs);
module.exports.addmis = function(newmis){newmis.save();}
