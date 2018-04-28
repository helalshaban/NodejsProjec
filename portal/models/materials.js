var mongoose = require('mongoose');







var materials = mongoose.Schema({
	coursename: {
		type: String
	},
	material: {
		type: String
	}

});


var materials = module.exports = mongoose.model('materials', materials);
module.exports.addmis = function(newmis){newmis.save();}
