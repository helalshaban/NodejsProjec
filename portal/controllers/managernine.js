var express = require('express');
var router = express.Router();

var dateFormat = require('dateformat');
var discussions = require('../models/discussions');

var material = require('../models/materials');

var users = require('../routes/users');

var user = require('../models/user');

var opencourses = require('../models/opencourses');


router.get('/Security',function(req,res){

    discussions.find({"coursename" : "Security"},function(err,re){
        if (err) {console.log(err);}
        else{ 
            var now = new Date();
           var x = dateFormat(now, "ddd, mmm , yyyy");
           
            res.render('students/stddiscussions',{coursename : "Security" , date : x , data:re});
         }
       
    });

});

router.get('/Network',function(req,res){

    discussions.find({"coursename" : "Network"},function(err,re){
        if (err) {console.log(err);}
        else{ 
            var now = new Date();
           var x = dateFormat(now, "ddd, mmm , yyyy");
           
            res.render('students/stddiscussions',{coursename : "Network" , date : x , data:re});
         }
       
    });

});
router.get('/DC',function(req,res){

    discussions.find({"coursename" : "DC"},function(err,re){
        if (err) {console.log(err);}
        else{ 
            var now = new Date();
           var x = dateFormat(now, "ddd, mmm , yyyy");
           
            res.render('students/stddiscussions',{coursename : "DC" , date : x , data:re});
         }
       
    });

});
router.get('/CS',function(req,res){

    discussions.find({"coursename" : "CS"},function(err,re){
        if (err) {console.log(err);}
        else{ 
            var now = new Date();
           var x = dateFormat(now, "ddd, mmm , yyyy");
           
            res.render('students/stddiscussions',{coursename : "CS" , date : x , data:re});
         }
       
    });

});
router.get('/CO',function(req,res){

    discussions.find({"coursename" : "CO"},function(err,re){
        if (err) {console.log(err);}
        else{ 
            var now = new Date();
           var x = dateFormat(now, "ddd, mmm , yyyy");
           
            res.render('students/stddiscussions',{coursename : "CO" , date : x , data:re});
         }
       
    });

});
router.get('/logicDesign',function(req,res){

    discussions.find({"coursename" : "logicDesign"},function(err,re){
        if (err) {console.log(err);}
        else{ 
            var now = new Date();
           var x = dateFormat(now, "ddd, mmm , yyyy");
           
            res.render('students/stddiscussions',{coursename : "logicDesign" , date : x , data:re});
         }
       
    });

});
router.get('/MIS',function(req,res){

    discussions.find({"coursename" : "MIS"},function(err,re){
        if (err) {console.log(err);}
        else{ 
            var now = new Date();
           var x = dateFormat(now, "ddd, mmm , yyyy");
           
            res.render('students/stddiscussions',{coursename : "MIS" , date : x , data:re});
         }
       
    });

});
router.get('/IS',function(req,res){

    discussions.find({"coursename" : "IS"},function(err,re){
        if (err) {console.log(err);}
        else{ 
            var now = new Date();
           var x = dateFormat(now, "ddd, mmm , yyyy");
           
            res.render('students/stddiscussions',{coursename : "IS" , date : x , data:re});
         }
       
    });

});
router.get('/KOP',function(req,res){

    discussions.find({"coursename" : "KOP"},function(err,re){
        if (err) {console.log(err);}
        else{ 
            var now = new Date();
           var x = dateFormat(now, "ddd, mmm , yyyy");
           
            res.render('students/stddiscussions',{coursename : "KOP" , date : x , data:re});
         }
       
    });

});


router.post('/askquestion',function(req,res){

    var username = users.couser;
    var user="";
    for(var i=0;i<username.length-1;i++){
      user += username[i+1];
    }

        discussion = req.body.discussion;
        questiontext = req.body.questiontext;
        coursename = req.body.coursename;


        var model = require('../models/discussions');

        var newques = new model({
            coursename: coursename,
            discussion: questiontext,
            student: user,
            answer: ""
        })

        model.addmis(newques);
        
        discussions.find({"coursename" : coursename},function(err,re){
            if (err) {console.log(err);}
            else{ 
                var now = new Date();
               var x = dateFormat(now, "ddd, mmm , yyyy");

        res.render('students/stddiscussions',{coursename : coursename , date : x , data:re});

                }
        });
})



module.exports = router;