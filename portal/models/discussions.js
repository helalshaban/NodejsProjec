var mongoose = require('mongoose');







var discussions = mongoose.Schema({
	coursename: {
		type: String
	},
	discussion: {
		type: String
    },
    student: {
        type: String
    },
    answer: {
        type: String
    }
});


var discussions = module.exports = mongoose.model('discussions', discussions);
module.exports.addmis = function(newmis){newmis.save();}
