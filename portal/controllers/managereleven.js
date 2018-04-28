var express = require('express');
var router = express.Router();

const split = require('express-split');

var user = require('../models/user');
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
var users = require('../routes/users');
var prof = require("../models/profs");

router.get('/editstd',function(req,res){

    
    var x="";
    for(var i=0;i<users.couser.length-1;i++){
      x += users.couser[i+1];
    }

    user.std.find({"username":x},function(err,data){
        res.render('students/editstd',{data:data})
    })


});

router.post('/updatestd',function(req,res){
    var x="";
    for(var i=0;i<users.couser.length-1;i++){
      x += users.couser[i+1];
    }

    var name = req.body.name;
	var password = req.body.password;
	var phone = module.exports= req.body.phone;
    var year = req.body.year;
    var email = req.body.email;
    var gender = req.body.gender;
    var depo = req.body.depo;

    var conditions = { username: x }
    , update = { $set: { name :name,
         password:password,
         phone :phone,
         year :year,
         email :email,
         gender :gender,
         depo :depo }}
    , options = { multi: false };

    user.std.update(conditions, update, options, callback);

function callback (err, numAffected) {
console.log(numAffected);
}

 
var x="";
for(var i=0;i<users.couser.length-1;i++){
  x += users.couser[i+1];
}

user.std.find({"username":x},function(err,data){
    res.render('students/editstd',{data:data})
});



    
});

router.get('/editprof',function(req,res){

    
    var x="";
    for(var i=0;i<users.couser.length-1;i++){
      x += users.couser[i+1];
    }

    prof.find({"username":x},function(err,data){
        res.render('doctors/editprof',{data:data})
    })


});

router.post('/updateprof',function(req,res){
    var x="";
    for(var i=0;i<users.couser.length-1;i++){
      x += users.couser[i+1];
    }

    var name = req.body.name;
	var password = req.body.password;
	var username = req.body.username;
    var email = req.body.email;


    var conditions = { username: x }
    , update = { $set: { name :name,
         password : password,
         username : username,
         email :email
         }}
    , options = { multi: false };

    prof.update(conditions, update, options, callback);

function callback (err, numAffected) {
console.log(numAffected);
}


    res.redirect('/managereleven/editprof');

    
});

router.get('/drop',function(req,res){
    
    user.cour.find({"opened":"1"},function(err,result){
        if (err) throw err;
        else{
            res.render('admin/dropcourse',{data:result});
        }
    });
});

router.post('/submitdrop',function(req,res){
    var co=[];
    var name =req.body.lolo;
    console.log(name);
    if(typeof name ==='string'){
        var cog = name;
        opencourses.opo.remove({"name":cog},function(err){
            if (err) throw err;
        });
        var conditions = { name: cog}
        , update = { $set: { opened: "0" }}
        , options = { multi: false };
    
        user.cour.update(conditions, update, options, callback);
        
        function callback (err, numAffected) {
            console.log(numAffected);
          }
    }else{
        for (var i = 0; i < name.length; i++) {
            co[i] = name[i];
            opencourses.opo.remove({"name":co[i]},function(err){
                if (err) throw err;
            });
            var conditions = { name: co[i] }
            , update = { $set: { opened: "0" }}
            , options = { multi: false };
        
            user.cour.update(conditions, update, options, callback);
            
            function callback (err, numAffected) {
                console.log(numAffected);
              }
    }}
    res.redirect('/managereleven/drop');
})






module.exports = router;