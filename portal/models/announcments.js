var mongoose = require('mongoose');







var announcments = mongoose.Schema({
	coursename: {
		type: String
	},
	announcment: {
		type: String
	}

});


var announcments = module.exports = mongoose.model('announcments', announcments);
module.exports.addmis = function(newmis){newmis.save();}

