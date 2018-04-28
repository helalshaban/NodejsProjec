var express = require('express');
var router = express.Router();

const split = require('express-split');

var Student = require('../models/user');
var mis = require('../models/mis');
var iss = require('../models/iss');
var security = require('../models/security');
var logicDesign = require('../models/logicDesign');
var network = require('../models/network');
var co = require('../models/co');
var kop = require('../models/kop');
var dc = require('../models/dc');
var cs = require('../models/cs');
var opencourses = require('../models/opencourses');
var nodemailer = require('nodemailer');
var uro = 50;
var hbda;
var hbdaend;





router.post('/addstudent', function (req, res) {

    var name = req.body.name;
    var password = req.body.password;
    var username = req.body.username;
    var phone = module.exports = req.body.phone;
    var year = req.body.year;
    var email = req.body.email;
    var gender = req.body.gender;
    var depo = req.body.depo;

    var newStudent = new Student({
        name: name,
        email: email,
        username: username,
        password: password,
        phoneNumber: phone,
        gender: gender,
        year: year,
        depo: depo
    });




    Student.getStudentByUsername(newStudent.username, function (err, stud) {


        if (err) throw err;

        if (stud) { res.redirect('/'); } else {





            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'jemy20200@gmail.com',
                    pass: 'elma3alem7eta'
                }
            });

            var mailOptions = {
                from: '"college" <yourcollege@fcih.edu>',
                to: email,
                subject: 'Account registeration',
                text: 'Your account has been created!  username: ' + 's' + username + '  password: ' + password
            };

            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });


            var param = [];
            param[0] = 's' + username;
            param[1] = name;
            param[2] = email;
            param[3] = password;


            Student.createUser(param, function (err, stud) {

                if (err) { throw err; }

            });

            Student.createStudent(newStudent, function (err, stud) {

                if (err) { throw err; }


            });
        } res.redirect('/');




    });
});

router.get('/courses',async function (req, res) {
   
   let pp ;
    pp = await Student.cour.find({"opened":"0"},function(err , cours){
             res.render('admin/Addsemester', {data: cours});
    });

    
});




router.post('/semestercourses', function (req, res) {

    var name = req.body.lolo;
    var co = [];
    var dep = [];
    var doc = [];
    
    if (typeof name === 'string') {
        var cog = name.split('/')[0];
        var depg = name.split('/')[1];
        var docg = name.split('/')[2];

        var course = new opencourses({
            name: cog,
            dept: depg,
            doctor: docg
    });
    opencourses.opo.opencourses(course);
    var conditions = { name: name.split('/')[0] }
    , update = { $set: { opened: "1" }}
    , options = { multi: false };

    Student.cour.update(conditions, update, options, callback);
    
    function callback (err, numAffected) {
        console.log(numAffected);
      }
          
}else{

        for (var i = 0; i < name.length; i++) {
            co[i] = name[i].split('/')[0];
            dep[i] = name[i].split('/')[1];
            doc[i] = name[i].split('/')[2];


            var course = new opencourses({
                name: co[i],
                dept: dep[i],
                doctor: doc[i]
            });

            opencourses.opo.opencourses(course);
           
            var conditions = { name: co[i] }
            , update = { $set: { opened: "1" }}
            , options = { multi: false };
    
            Student.cour.update(conditions, update, options, callback);
    
    function callback (err, numAffected) {
      console.log(numAffected);
    }
        

        }
    }

    res.redirect('/');

});


router.get('/fillmarks', function (req, res) {
    opencourses.opo.find({}, function (err, result) {
        res.render('admin/fillmarks', { data: result });

    });

});


router.get('/MIS', function (req, res) {

    console.log('mis working');
    mis.find({}, function (err, respo) {
        if (err) { console.log('Something wrong with find Marks !'); }
        res.render('admin/submitmarks', { coursename: "misgrades", data: respo });
    });



});

router.post('/misgrades', function (req, res) {
    var username = [];
    var grade = [];
    username = req.body.Username;
    grade = req.body.grade;
    ///////////////////////////////////////////////////
if (typeof req.body.Username == 'string'){
 
    var conditions = { Username: username }
    , update = { $set: { grade: grade}}
    , options = { multi: true };

    mis.update(conditions, update, options, callback);
     

function callback (err, numAffected) {
console.log(numAffected);
}
 } else {

///////////////////////////////////////////////////
    for (var i = 0; i < username.length; i++) {
        var conditions = { Username: username[i] }
            , update = { $set: { grade: grade[i] } }
            , options = { multi: true };

        mis.update(conditions, update, options, callback);

        function callback(err, numAffected) {
            console.log(numAffected);
        }
    }}
    opencourses.opo.find({}, function (err, result) {
        res.render('admin/fillmarks', { data: result });
    });
    
});


router.get('/IS', function (req, res) {

    console.log('IS is working');
    iss.find({}, function (err, respo) {
        if (err) { console.log('Something wrong with find Marks !'); }
        res.render('admin/submitmarks', { coursename: "isgrades", data: respo });
    });

});

router.post('/isgrades', function (req, res) {
    var username = [];
    var grade = [];
    username = req.body.Username;
    grade = req.body.grade;
    ///////////////////////////////////////////////////
if (typeof req.body.Username == 'string'){
 
    var conditions = { Username: username }
    , update = { $set: { grade: grade}}
    , options = { multi: true };

    iss.update(conditions, update, options, callback);
     

function callback (err, numAffected) {
console.log(numAffected);
} } else {

///////////////////////////////////////////////////
    for (var i = 0; i < username.length; i++) {
        var conditions = { Username: username[i] }
            , update = { $set: { grade: grade[i] } }
            , options = { multi: false };

        iss.update(conditions, update, options, callback);

        function callback(err, numAffected) {
            console.log(numAffected);
        }
    }}
    opencourses.opo.find({}, function (err, result) {
        res.render('admin/fillmarks', { data: result });
    });
});

router.get('/KOP', function (req, res) {

    console.log('mis working');
    kop.find({}, function (err, respo) {
        if (err) { console.log('Something wrong with find Marks !'); }
        res.render('admin/submitmarks', { coursename: "kopgrades", data: respo });
    });

});

router.post('/kopgrades', function (req, res) {
    var username = [];
    var grade = [];
    username = req.body.Username;
    grade = req.body.grade;
    ///////////////////////////////////////////////////
if (typeof req.body.Username == 'string'){
 
    var conditions = { Username: username }
    , update = { $set: { grade: grade}}
    , options = { multi: true };

    kop.update(conditions, update, options, callback);
     

function callback (err, numAffected) {
console.log(numAffected);
} } else {

///////////////////////////////////////////////////
    for (var i = 0; i < username.length; i++) {
        var conditions = { Username: username[i] }
            , update = { $set: { grade: grade[i] } }
            , options = { multi: false };

        kop.update(conditions, update, options, callback);

        function callback(err, numAffected) {
            console.log(numAffected);
        }
    }}
    opencourses.opo.find({}, function (err, result) {
        res.render('admin/fillmarks', { data: result });
    });
});

router.get('/Security', function (req, res) {

    console.log('mis working');
    security.find({}, function (err, respo) {
        if (err) { console.log('Something wrong with find Marks !'); }
        res.render('admin/submitmarks', { coursename: "securitygrades", data: respo });
    });

});

router.post('/securitygrades', function (req, res) {
    var username = [];
    var grade = [];
    username = req.body.Username;
    grade = req.body.grade;
///////////////////////////////////////////////////
if (typeof req.body.Username == 'string'){
 
    var conditions = { Username: username }
    , update = { $set: { grade: grade}}
    , options = { multi: true };

    security.update(conditions, update, options, callback);
     

function callback (err, numAffected) {
console.log(numAffected);
} } else {

///////////////////////////////////////////////////
    for (var i = 0; i < username.length; i++) {
        var conditions = { Username: username[i] }
            , update = { $set: { grade: grade[i] } }
            , options = { multi: false };

        security.update(conditions, update, options, callback);

        function callback(err, numAffected) {
            console.log(numAffected);
        }
    }}
    opencourses.opo.find({}, function (err, result) {
        res.render('admin/fillmarks', { data: result });
    });
});

router.get('/Network', function (req, res) {

    console.log('mis working');
    network.find({}, function (err, respo) {
        if (err) { console.log('Something wrong with find Marks !'); }
        res.render('admin/submitmarks', { coursename: "networkgrades", data: respo });
    });

});

router.post('/networkgrades', function (req, res) {

    var username = [];
    var grade = [];
    username = req.body.Username;
    grade = req.body.grade;
///////////////////////////////////////////////////
if (typeof req.body.Username == 'string'){
 
     var conditions = { Username: username }
     , update = { $set: { grade: grade}}
     , options = { multi: true };

     network.update(conditions, update, options, callback);
      

function callback (err, numAffected) {
console.log(numAffected);
} } else {

///////////////////////////////////////////////////
    for (var i = 0; i < username.length; i++) {
        var conditions = { Username: username[i] }
            , update = { $set: { grade: grade[i] } }
            , options = { multi: false };

        network.update(conditions, update, options, callback);

        function callback(err, numAffected) {
            console.log(numAffected);
        }
    }
}    opencourses.opo.find({}, function (err, result) {
    res.render('admin/fillmarks', { data: result });
});
});

router.get('/DC', function (req, res) {

    console.log('mis working');
    dc.find({}, function (err, respo) {
        if (err) { console.log('Something wrong with find Marks !'); }
        res.render('admin/submitmarks', { coursename: "dcgrades", data: respo });
    });

});

router.post('/dcgrades', function (req, res) {
    var username = [];
    var grade = [];
    username = req.body.Username;
    grade = req.body.grade;
    ///////////////////////////////////////////////////
if (typeof req.body.Username == 'string'){
 
    var conditions = { Username: username }
    , update = { $set: { grade: grade}}
    , options = { multi: true };

    dc.update(conditions, update, options, callback);
     

function callback (err, numAffected) {
console.log(numAffected);
} } else {

///////////////////////////////////////////////////
    for (var i = 0; i < username.length; i++) {
        var conditions = { Username: username[i] }
            , update = { $set: { grade: grade[i] } }
            , options = { multi: false };

        dc.update(conditions, update, options, callback);

        function callback(err, numAffected) {
            console.log(numAffected);
        }
    }}
    opencourses.opo.find({}, function (err, result) {
        res.render('admin/fillmarks', { data: result });
    });
});

router.get('/CS', function (req, res) {

    console.log('mis working');
    cs.find({}, function (err, respo) {
        if (err) { console.log('Something wrong with find Marks !'); }
        res.render('admin/submitmarks', { coursename: "csgrades", data: respo });
    });

});

router.post('/csgrades', function (req, res) {
    var username = [];
    var grade = [];
    username = req.body.Username;
    grade = req.body.grade;
    ///////////////////////////////////////////////////
if (typeof req.body.Username == 'string'){
 
    var conditions = { Username: username }
    , update = { $set: { grade: grade}}
    , options = { multi: true };

    cs.update(conditions, update, options, callback);
     

function callback (err, numAffected) {
console.log(numAffected);
} } else {

///////////////////////////////////////////////////
    for (var i = 0; i < username.length; i++) {
        var conditions = { Username: username[i] }
            , update = { $set: { grade: grade[i] } }
            , options = { multi: false };

        cs.update(conditions, update, options, callback);

        function callback(err, numAffected) {
            console.log(numAffected);
        }
    }}
    opencourses.opo.find({}, function (err, result) {
        res.render('admin/fillmarks', { data: result });
    });
});


router.get('/logicDesign', function (req, res) {

    console.log('mis working');
    logicDesign.find({}, function (err, respo) {
        if (err) { console.log('Something wrong with find Marks !'); }
        res.render('admin/submitmarks', { coursename: "logicDesigngrades", data: respo });
    });

});

router.post('/logicDesigngrades', function (req, res) {
    var username = [];
    var grade = [];
    username = req.body.Username;
    grade = req.body.grade;
    ///////////////////////////////////////////////////
if (typeof req.body.Username == 'string'){
 
    var conditions = { Username: username }
    , update = { $set: { grade: grade}}
    , options = { multi: true };

    logicDesign.update(conditions, update, options, callback);
     

function callback (err, numAffected) {
console.log(numAffected);
} } else {

///////////////////////////////////////////////////
    for (var i = 0; i < username.length; i++) {
        var conditions = { Username: username[i] }
            , update = { $set: { grade: grade[i] } }
            , options = { multi: false };

        logicDesign.update(conditions, update, options, callback);

        function callback(err, numAffected) {
            console.log(numAffected);
        }
    }}
    opencourses.opo.find({}, function (err, result) {
        res.render('admin/fillmarks', { data: result });
    });
});

router.get('/CO', function (req, res) {

    console.log('mis working');
    co.find({}, function (err, respo) {
        if (err) { console.log('Something wrong with find Marks !'); }
        res.render('admin/submitmarks', { coursename: "cogrades", data: respo });
    });

});

router.post('/cogrades', function (req, res) {
    var username = [];
    var grade = [];
    username = req.body.Username;
    grade = req.body.grade;
    ///////////////////////////////////////////////////
if (typeof req.body.Username == 'string'){
 
    var conditions = { Username: username }
    , update = { $set: { grade: grade}}
    , options = { multi: true };

    co.update(conditions, update, options, callback);
     

function callback (err, numAffected) {
console.log(numAffected);
} } else {

///////////////////////////////////////////////////
    for (var i = 0; i < username.length; i++) {
        var conditions = { Username: username[i] }
            , update = { $set: { grade: grade[i] } }
            , options = { multi: false };

        co.update(conditions, update, options, callback);

        function callback(err, numAffected) {
            console.log(numAffected);
        }
    }}
    opencourses.opo.find({}, function (err, result) {
        res.render('admin/fillmarks', { data: result });
    });
});





module.exports = router;