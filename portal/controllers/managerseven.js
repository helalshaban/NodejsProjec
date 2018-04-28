var express = require('express');
var router = express.Router();

var materials = require('../models/materials');
var announcments = require('../models/announcments');
var discussions = require('../models/discussions');
var profs = require('../models/profs');
var announcements = require('../models/announcments');
var User = require('../models/user');

var dateFormat = require('dateformat');


   router.get('/Security',function(req,res){

    announcements.find({"coursename" : "Security"},function(err,re){
        if (err) {console.log(err);}
        else{ 
            var now = new Date();
           var x = dateFormat(now, "ddd, mmm , yyyy");
           
            res.render('students/stdannouncement',{coursename : "Security" , date : x , data:re});
         }
       
    });

});

router.get('/Network',function(req,res){

    announcements.find({"coursename" : "Network"},function(err,re){
        if (err) {console.log(err);}
        else{ 
            var now = new Date();
           var x = dateFormat(now, "ddd, mmm , yyyy");
           
            res.render('students/stdannouncement',{coursename : "Network" , date : x , data:re});
         }
       
    });

});
router.get('/DC',function(req,res){

    announcements.find({"coursename" : "DC"},function(err,re){
        if (err) {console.log(err);}
        else{ 
            var now = new Date();
           var x = dateFormat(now, "ddd, mmm , yyyy");
           
            res.render('students/stdannouncement',{coursename : "DC" , date : x , data:re});
         }
       
    });

});
router.get('/CS',function(req,res){

    announcements.find({"coursename" : "CS"},function(err,re){
        if (err) {console.log(err);}
        else{ 
            var now = new Date();
           var x = dateFormat(now, "ddd, mmm , yyyy");
           
            res.render('students/stdannouncement',{coursename : "CS" , date : x , data:re});
         }
       
    });

});
router.get('/CO',function(req,res){

    announcements.find({"coursename" : "CO"},function(err,re){
        if (err) {console.log(err);}
        else{ 
            var now = new Date();
           var x = dateFormat(now, "ddd, mmm , yyyy");
           
            res.render('students/stdannouncement',{coursename : "CO" , date : x , data:re});
         }
       
    });

});
router.get('/logicDesign',function(req,res){

    announcements.find({"coursename" : "logicDesign"},function(err,re){
        if (err) {console.log(err);}
        else{ 
            var now = new Date();
           var x = dateFormat(now, "ddd, mmm , yyyy");
           
            res.render('students/stdannouncement',{coursename : "logicDesign" , date : x , data:re});
         }
       
    });

});
router.get('/MIS',function(req,res){

    announcements.find({"coursename" : "MIS"},function(err,re){
        if (err) {console.log(err);}
        else{ 
            var now = new Date();
           var x = dateFormat(now, "ddd, mmm , yyyy");
           
            res.render('students/stdannouncement',{coursename : "MIS" , date : x , data:re});
         }
       
    });

});
router.get('/IS',function(req,res){

    announcements.find({"coursename" : "IS"},function(err,re){
        if (err) {console.log(err);}
        else{ 
            var now = new Date();
           var x = dateFormat(now, "ddd, mmm , yyyy");
           
            res.render('students/stdannouncement',{coursename : "IS" , date : x , data:re});
         }
       
    });

});
router.get('/KOP',function(req,res){

    announcements.find({"coursename" : "KOP"},function(err,re){
        if (err) {console.log(err);}
        else{ 
            var now = new Date();
           var x = dateFormat(now, "ddd, mmm , yyyy");
           
            res.render('students/stdannouncement',{coursename : "KOP" , date : x , data:re});
         }
       
    });

});



module.exports = router;