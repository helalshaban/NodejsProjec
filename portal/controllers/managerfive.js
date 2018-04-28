var express = require('express');
var router = express.Router();
var users = require('../routes/users');
var dateFormat = require('dateformat');
var user = require('../models/user');

var dateFormat = require('dateformat');
var phone = require('./manager');
var material = require('../models/materials');
var opencourses = require('../models/opencourses');
const Nexmo = require('nexmo');
const socketio = require('socket.io');


var uro = 50;
var hbda;



router.get('/stdhome', function (req, res) {
    var username = users.couser;
    var x = "";
    for (var i = 0; i < username.length - 1; i++) {
        x += username[i + 1];
    }




    user.std.find({ "username": x }, { "depo": 1, "_id": 0 }, function (err, ref) {
        if (err) throw err;
        else {

            var co = [];
            var xo = [];
            opencourses.opo.find({ "dept": ref[0].depo }, async function (err, response) {
                if (err) { console.log(err); }
                else {
                    let pp;
                    for (var iz = 0; iz < response.length; iz++) {

                        if (!response[iz]) { } else {
                            var t = response[iz].name.toLocaleLowerCase();
                            if (!t) { console.log('popo'); }
                            else {
                                for (var l = 1; l < 10; l++) {
                                    if (t == 'is') { t = 'iss'; }
                                    if (t == 'logicdesign') { t = 'logicDesign'; }
                                    var md = require('../models/' + t);


                                    pp = await md.find({ Username: x }, async function (err, grade) {

                                        if (!grade[0]) {
                                            co.push(t);

                                        } else { console.log('mwgooda'); }



                                    });
                                }


                            }
                        }

                    }
                } //}
                //console.log(co);
                for (var ty = 0; ty < co.length; ty++) {
                    if (co[ty] == co[ty + 1]) { xo.push(co[ty]); }
                }
                uniqueArray = xo.filter(function (elem, pos) {
                    return xo.indexOf(elem) == pos;
                });
                // console.log(uniqueArray);
                console.log(xo);
                res.render('students/stdenroll', { data: uniqueArray });

            });
            /* var now = new Date();
            var x = dateFormat(now, "ddd, mmm , yyyy");*/

            //res.render('students/stdenroll',{coursename : "CS" , date : x , data:ref});
        }
    });


});


router.post('/register', function (req, res) {
    const nexmo = new Nexmo({
        apiKey: 'f0e5a7e6',
        apiSecret: '6uUwlaMhJT0HNoWe'
    }, { debug: true });

    var name = req.body.lolo;
    var co = [];

    var col = [];


    var username = users.couser;
    var s = "";

    for (var i = 0; i < username.length - 1; i++) {
        s += username[i + 1];
    }

    if (typeof name === 'string') {
        var cog = name;

        if (!cog) { console.log('no7'); }
        else {

            var y = require("../models/" + cog);
            var course = new y({
                Username: s,
                grade: ""
            });

            y.addmis(course);
            col.push(cog);

        }
    } else {


        for (var i = 0; i < name.length; i++) {
            co[i] = name[i];

            if (!co[i]) { console.log('no7'); }
            else {


                var y = require("../models/" + co[i]);
                var course = new y({
                    Username: s,
                    grade: ""
                });

                y.addmis(course);
                col.push(co[i]);
            }
        }
    }
    /*var ss="";
    for(var pl=0;pl<name.length;pl++){
        ss += name[pl]+"\n";
    }

    user.std.find({"username":s},{"phoneNumber":1,"_id":0},function(err,fd){
        ///////////
    nexmo.message.sendSms(
        "NEXMO", '2'+fd[0].phoneNumber,ss, { type: 'unicode' },
        (err, responseData) => {
          if(err) {
            console.log(err);
          } else {

            console.dir(responseData);
            // Get data from response
            const data = {
              id: responseData.messages[0]['message-id'],
              number: responseData.messages[0]['to']
            }
    
            
            
          }
        }
      );
    

    //////////
    
    });*/

    res.redirect('/managerfive/stdhome');

});


router.get('/stdgrades', function (req, res) {

    var username = users.couser;
    var x = "";
    //split username to remove {a,d,s}
    for (var i = 0; i < username.length - 1; i++) {
        x += username[i + 1];
    }



    // find the dept of the logged student
    user.std.find({ "username": x }, { "depo": 1, "_id": 0 }, function (err, ref) {

        if (err) throw err;


        else {

            //courses of student dept
            opencourses.opo.find({ "dept": ref[0].depo }, { "name": 1, "_id": 0 }, function (err, courses) {
                if (err) { console.log(err); }
                else {
                    hbda = uro - courses.length;
                    console.log(hbda);
                    var arrs = [];

                    for (var tb = 0; tb < courses.length; tb++) {
                        arrs.push(tb);



                        var y = courses[tb].name.toLocaleLowerCase();
                        if (y === 'is') { y = 'iss'; }
                        if (y === 'logicdesign') { y = 'logicDesign'; }

                        myfunc(x, y, arrs, hbda, res);




                    }


                }


            });

        }
    });

});

var mbc = [];
var two = [];

var myfunc = function (x, y, arrs, hbda, res) {

    var md = require('../models/' + y);


    md.find({ "Username": x }, { "_id": 0 }, function (err, grades) {
        if (err) throw err;
        uro--;
        if (!grades[0]) {
            console.log('null');
        } else {

            mbc.push(grades);
            two.push(y);

        }

        var hours = 0;
        var chours = 0;
        var gpa = 0;
        var x = 0;
        var points = 0;
        if (hbda === uro) {

            var em = [];
            var sm = [];


            for (var bs = 0; bs < two.length; bs++) {
                if (two[bs] === 'iss') { two[bs] = 'is' }

            }

            for (i = 0; i < mbc.length; i++) {
                if (mbc[i][0].grade.toLocaleLowerCase() == 'f' || mbc[i][0].grade.toLocaleLowerCase() == '') {
                    x++;
                }


            }
            for (i = 0; i < mbc.length; i++) {

                if (mbc[i][0].grade.toLocaleLowerCase() == 'd') {
                    points += (2 * 3);
                }
                else if (mbc[i][0].grade.toLocaleLowerCase() == 'c') {
                    points += (2.5 * 3);
                }
                else if (mbc[i][0].grade.toLocaleLowerCase() == 'b') {
                    points += (3 * 3);
                }
                else if (mbc[i][0].grade.toLocaleLowerCase() == 'a') {
                    points += (4 * 3);
                }
            }
            chours = (two.length - x) * 3;
            console.log("chours" + chours);
            hours = chours;
            console.log(hours);
            console.log(points);
            gpa = points / (hours);
            console.log(gpa);
            res.render('students/stdgrades', { coursename: two, data: mbc, Gpa: gpa, Hours: chours });
            uro = 50; two = em; mbc = sm; Hours = 0;
            Gpa = 0;
        }
    });

}






module.exports = router;