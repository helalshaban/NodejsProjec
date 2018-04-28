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

    
    
    
    
    
    
    router.get('/editmarks', function(req , res){
        opencourses.opo.find({},function(err,result){
           res.render('admin/editmarks',{data:result});
           
        });
        
   });
     

   router.get('/MIS',function(req,res){

       console.log('la2aa la2');
       mis.find({},function(err,respo){
           if (err){console.log('Something wrong with find Marks !');}
           res.render('admin/editmarks',{coursename : "misgrades",data:respo});
       });
   
       
       
   });

   router.post('/misgrades',function(req,res){
       
       
      var username = req.body.Username;
      var grade = req.body.grade;
   
       var conditions = { Username: username }
       , update = { $set: { grade: grade}}
       , options = { multi: true };

       mis.update(conditions, update, options, callback);
        

function callback (err, numAffected) {
 console.log(numAffected);
}
opencourses.opo.find({}, function (err, result) {
    res.render('admin/fillmarks', { data: result });
});
       
   });
   

   router.get('/IS',function(req,res){

       console.log('IS is working');
       iss.find({},function(err,respo){
           if (err){console.log('Something wrong with find Marks !');}
           res.render('admin/editmarks',{coursename : "isgrades",data:respo});
       });
       
   });
   
   router.post('/isgrades',function(req,res){

    var username = req.body.Username;
    var grade = req.body.grade;
 
     var conditions = { Username: username }
     , update = { $set: { grade: grade}}
     , options = { multi: true };

     iss.update(conditions, update, options, callback);
      

function callback (err, numAffected) {
console.log(numAffected);
}
opencourses.opo.find({}, function (err, result) {
    res.render('admin/fillmarks', { data: result });
});
       });

   router.get('/KOP',function(req,res){

       console.log('mis working');
       kop.find({},function(err,respo){
           if (err){console.log('Something wrong with find Marks !');}
           res.render('admin/editmarks',{coursename : "kopgrades",data:respo});
       });
       
   });

   router.post('/kopgrades',function(req,res){

        var username = req.body.Username;
      var grade = req.body.grade;
   
       var conditions = { Username: username }
       , update = { $set: { grade: grade}}
       , options = { multi: true };

       kop.update(conditions, update, options, callback);
        

function callback (err, numAffected) {
 console.log(numAffected);
}
opencourses.opo.find({}, function (err, result) {
    res.render('admin/fillmarks', { data: result });
});
   });

   router.get('/Security',function(req,res){

       console.log('mis working');
       security.find({},function(err,respo){
           if (err){console.log('Something wrong with find Marks !');}
           res.render('admin/editmarks',{coursename : "securitygrades",data:respo});
       });
       
   });

   router.post('/securitygrades',function(req,res){

      var username = req.body.Username;
      var grade = req.body.grade;
   
       var conditions = { Username: username }
       , update = { $set: { grade: grade}}
       , options = { multi: true };

       security.update(conditions, update, options, callback);
        

function callback (err, numAffected) {
 console.log(numAffected);
}
opencourses.opo.find({}, function (err, result) {
    res.render('admin/fillmarks', { data: result });
});
   });

   router.get('/Network',function(req,res){

       console.log('mis working');        
           network.find({},function(err,respo){
           if (err){console.log('Something wrong with find Marks !');}
           res.render('admin/editmarks',{coursename : "networkgrades",data:respo});
       });
       
   });

   router.post('/networkgrades',function(req,res){

    var username = req.body.Username;
    var grade = req.body.grade;
 
     var conditions = { Username: username }
     , update = { $set: { grade: grade}}
     , options = { multi: true };

     network.update(conditions, update, options, callback);
      

function callback (err, numAffected) {
console.log(numAffected);
}
opencourses.opo.find({}, function (err, result) {
    res.render('admin/fillmarks', { data: result });
});
   });

   router.get('/DC',function(req,res){

       console.log('mis working');
       dc.find({},function(err,respo){
           if (err){console.log('Something wrong with find Marks !');}
           res.render('admin/editmarks',{coursename : "dcgrades",data:respo});
       });
       
   });

   router.post('/dcgrades',function(req,res){

      var username = req.body.Username;
      var grade = req.body.grade;
   
       var conditions = { Username: username }
       , update = { $set: { grade: grade}}
       , options = { multi: true };

       dc.update(conditions, update, options, callback);
        

function callback (err, numAffected) {
 console.log(numAffected);
}
opencourses.opo.find({}, function (err, result) {
    res.render('admin/fillmarks', { data: result });
});
   });

   router.get('/CS',function(req,res){

       console.log('mis working');
       cs.find({},function(err,respo){
           if (err){console.log('Something wrong with find Marks !');}
           res.render('admin/editmarks',{coursename : "csgrades",data:respo});
       });
       
   });

   router.post('/csgrades',function(req,res){
      var username = req.body.Username;
      var grade = req.body.grade;
   
       var conditions = { Username: username }
       , update = { $set: { grade: grade}}
       , options = { multi: true };

       cs.update(conditions, update, options, callback);
        

function callback (err, numAffected) {
 console.log(numAffected);
}
opencourses.opo.find({}, function (err, result) {
    res.render('admin/fillmarks', { data: result });
});
   });


   router.get('/logicDesign',function(req,res){

       console.log('mis working');
       logicDesign.find({},function(err,respo){
           if (err){console.log('Something wrong with find Marks !');}
           res.render('admin/editmarks',{coursename : "logicDesigngrades",data:respo});
       });
       
   });

   router.post('/logicDesigngrades',function(req,res){
    var username = req.body.Username;
    var grade = req.body.grade;
 
     var conditions = { Username: username }
     , update = { $set: { grade: grade}}
     , options = { multi: true };

     logicDesign.update(conditions, update, options, callback);
      

function callback (err, numAffected) {
console.log(numAffected);
}
opencourses.opo.find({}, function (err, result) {
    res.render('admin/fillmarks', { data: result });
});
   });

   router.get('/CO',function(req,res){

       console.log('mis working');
       co.find({},function(err,respo){
           if (err){console.log('Something wrong with find Marks !');}
           res.render('admin/editmarks',{coursename : "cogrades",data:respo});
       });
       
   });

   router.post('/cogrades',function(req,res){
    var username = req.body.Username;
    var grade = req.body.grade;
 
     var conditions = { Username: username }
     , update = { $set: { grade: grade}}
     , options = { multi: true };

     co.update(conditions, update, options, callback);
      

function callback (err, numAffected) {
console.log(numAffected);
}
opencourses.opo.find({}, function (err, result) {
    res.render('admin/fillmarks', { data: result });
});
   });
   




module.exports = router;