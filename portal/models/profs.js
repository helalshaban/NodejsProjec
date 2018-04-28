var mongoose = require('mongoose');







var prof = mongoose.Schema({
	name: {
		type: String
	},
	username: {
        type: String,
        index:true
    },
    password: {
		type: String
    },
    email: {
		type: String
	}

});


var profs = module.exports = mongoose.model('profs', prof);

module.exports.addmis = function(newmis){newmis.save();}

module.exports.getprofByUsername = function(username, callback){
	var query = {username: username};
	console.log(username);
	profs.findOne(query, callback);
}
