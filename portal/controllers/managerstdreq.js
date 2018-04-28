var express = require('express');
var router = express.Router();
var users = require('../routes/users');
var dateFormat = require('dateformat');
var user = require('../models/user');
var requestes = require('../models/requests');
var dateFormat = require('dateformat');
var material = require('../models/materials');
var opencourses = require('../models/opencourses');
var uro = 50;
var hbda;


router.get('/stdrequestCourse', function (req, res) {


    opencourses.find(function (err, data) {
        if (err) {
            console.log(err);

        }
        else {
            res.render('students/RequestCourse', { data: data });
        }
    })
});

router.post('/submitrequest', function (req, res) {
    var course = req.body.slectedCourse;
    var username = users.couser;
    var x = '';
    for (var i = 0; i < username.length - 1; i++) {
        x += username[i + 1];
    }
    var Request = new requestes({
        Username: x,
        request: course,
        Type: 'Request'
    });
    requestes.addreq(Request, function (err) {
        if (err) {
            console.log(err);

        }
        else {

        }

    })
    res.render('students/Request');

});

router.post('/stdDropCourse2', function (req, res) {
    var username = users.couser;
    var request = req.body.slectedCourse;
    var x = '';
    for (var i = 0; i < username.length - 1; i++) {
        x += username[i + 1];
    }
    var Request = new requestes({
        Username: x,
        request: request,
        Type: 'Drop'
    });
    requestes.addreq(Request, function (err) {
        if (err) throw err;  });
        res.render('students/Request');
    console.log('working');
});
router.get('/stdDropCourse', function (req, res) {

    var username = users.couser;
    var x = "";
    //split username to remove {a,d,s}

    for (var i = 0; i < username.length - 1; i++) {
        x += username[i + 1];
    }
    opencourses.opo.find({}, function (err, courses) {
        if (err) {
            console.log(err);
        }

        else {
            hbda = uro - courses.length;
            for (var tb = 0; tb < courses.length; tb++) {
                var y = courses[tb].name.toLocaleLowerCase();
                if (y == 'is') {
                    y = 'iss';
                }
                if (y == 'logicdesign') {
                    y = 'logicDesign';
                }


                myfunc2(x, y, hbda, res);
            }
        }
    })
});



var two2 = [];
var myfunc2 = function (x, y, hbda, res) {

    var md = require('../models/' + y);
    md.find({ "Username": x }, { "_id": 0 }, function (err, grades) {
        if (err) throw err;

        uro--;
        if (grades[0]) {
            two2.push(y);

        } else {
            console.log('null');
        }
        if (hbda === uro) {
            var em = [];
            console.log('ana gowa gowa l habdaa! ');
            console.log(two2);

            res.render('students/DropCourse', { coursename: two2 });
            uro = 50;
            two2 = em;
        }
    });
}


router.post('/otherRequest', function (req, res) {
    var other = req.body.OtherRequest;
    var username = users.couser;
    var x = '';
    for (var i = 0; i < username.length - 1; i++) {
        x += username[i + 1];
    }
    var Request = new requestes({
        Username: x,
        request: other,
        Type: 'Other'
    });
    requestes.addreq(Request, function (err) {
        if (err) {
            console.log(err);

        }
        else {
            res.render('/students/Request');
        }
    })

});

router.post('/admindeleterequest', function (req, res) {
    console.log("dddd");
    var x = req.body.request;
    var y = req.body.Username;
    console.log(x);
    deleteRequest(x, y, res);

});

router.post('/adminAcpeption', function (req, res) {
    var request = req.body.requesth;
    var username = req.body.Usernameh;
    //split username to remove {a,d,s}

    var v = request.toLocaleLowerCase();

    var t = req.body.Type.toLocaleLowerCase();
    if (t == "request") {
        deleteRequest(request, username, res);
        addCourse(v, username);
    }
    else {
        dropCourse(request, username,res);
        deleteRequest(request, username, res);

    }
});
var addCourse = function (course, user) {
    if (course == 'is') {
        course = 'iss';
    }
    if (course == 'logicdesign') {
        course = 'logicDesign';
    }
    console.log("add course fumction is working ");

    var md = require('../models/' + course);
    var obj = new md({
        Username: user,
        grade: ''
    });
    md.addmis(obj);
}
var dropCourse = function (course, user,res) {

    console.log("drop course function is runinig")
    var md = require('../models/' + course);
    md.remove({ "Username": user }, function (err) {
        if (err) {
            console.log(err);
        }
        else {
            
        }
        res.render('admin/requestes', { data });
    });
}

var deleteRequest = function (x, y, res) {

    var md = require('../models/requests');
    md.remove({ "Username": y, "request": x }, function (err) {
        if (err) {
            console.log(err);
        }
        else {
            requestes.find({}, function (err, data) {
                if (err) {
                    console.log(err);
                }
                else {
                }
                res.render('admin/requestes', {data});

            })
        }
    })
}
router.get('/ShowAllRequestes', function (req, res) {
    var md = require('../models/requests');
    requestes.find({}, function (err, data) {
        if (err) {
            console.log(err);
        }
        else {
            res.render('admin/requestes', { data: data });
        }
    })
}
)
    ;


module.exports = router;