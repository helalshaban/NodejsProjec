var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

// User Schema
var UserSchema = mongoose.Schema({
	username: {
		type: String,
		index:true
	},
	password: {
		type: String
	},
	email: {
		type: String
	},
	name: {
		type: String
	}
});

var StudentSchema = mongoose.Schema({
	name: {
		type: String
	},
	username: {
		type: String,
		index: true
	},
	email: {
		type: String
	},
	password: {
		type: String
	},
	year: {
		type: String
	},
	gender: {
		type: String
	},
	phoneNumber: {
		type: String
	},
	depo: {
		type: String
	}
});

var CoursesSchema = mongoose.Schema({
	name: {
		type: String
	},
	dept: {
		type: String
	},
	doctor:{
		type: String
	},
	opened:{
		type: String
	}
	
});


var is = mongoose.Schema({
	Username: {
		type: String
	},
	grade: {
		type: String
	}

});
var kop = mongoose.Schema({
	Username: {
		type: String
	},
	grade: {
		type: String
	}

});
var security = mongoose.Schema({
	Username: {
		type: String
	},
	grade: {
		type: String
	}

});
var network = mongoose.Schema({
	Username: {
		type: String
	},
	grade: {
		type: String
	}

});
var dc = mongoose.Schema({
	Username: {
		type: String
	},
	grade: {
		type: String
	}

});
var cs = mongoose.Schema({
	Username: {
		type: String
	},
	grade: {
		type: String
	}

});
var co = mongoose.Schema({
	Username: {
		type: String
	},
	grade: {
		type: String
	}

});
var logic = mongoose.Schema({
	Username: {
		type: String
	},
	grade: {
		type: String
	}

});

var User = module.exports = mongoose.model('User', UserSchema);
var Student = module.exports = mongoose.model('Student', StudentSchema);
var courses = mongoose.model('Courses', CoursesSchema);






var is = mongoose.model('is', is);




module.exports.createStudent = function(newStudent){newStudent.save();}

module.exports.cour = courses;
module.exports.std = Student;

 

 
module.exports.getStudentByUsername = function(username, callback){
	var query = {username: username};
	Student.findOne(query, callback);
}

module.exports.createUser = function(data, callback){
	var newUser = new User({
		name: data[1],
		email:data[2],
		username: data[0],
		password: data[3]
	});
	bcrypt.genSalt(10, function(err, salt) {
	    bcrypt.hash(newUser.password, salt, function(err, hash) {
	        newUser.password = hash;
	        newUser.save(callback);
	    });
	});
}

module.exports.getUserByUsername = function(username, callback){
	var query = {username: username};
	User.findOne(query, callback);
}

module.exports.getUserById = function(id, callback){
	User.findById(id, callback);
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
	bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
		if(err) throw err;
    	callback(null, isMatch);
	});
}