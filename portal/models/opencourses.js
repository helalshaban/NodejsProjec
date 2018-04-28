var mongoose = require('mongoose');







var opencourses = mongoose.Schema({
	name: {
		type: String
	},
	dept: {
		type: String
	},
	doctor:{
		type: String
	}

});


var opencourses = module.exports = mongoose.model('opencourses', opencourses);
module.exports.opencourses = function(course){course.save();}

module.exports.opo = opencourses;

module.exports.getopoByUsername = function(coursename, callback){
	var query = {name: coursename};
	opencourses.findOne(query, callback);
}