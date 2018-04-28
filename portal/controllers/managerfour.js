var express = require('express');
var router = express.Router();

var dateFormat = require('dateformat');
var material = require('../models/materials');

router.get('/Security',function(req,res){

    material.find({"coursename" : "Security"},function(err,re){
        if (err) {console.log(err);}
        else{ 
            var now = new Date();
           var x = dateFormat(now, "ddd, mmm , yyyy");
           
            res.render('doctors/material',{coursename : "Security" , date : x , data:re});
         }
       
    });

});

router.get('/Network',function(req,res){

    material.find({"coursename" : "Network"},function(err,re){
        if (err) {console.log(err);}
        else{ 
            var now = new Date();
           var x = dateFormat(now, "ddd, mmm , yyyy");
           
            res.render('doctors/material',{coursename : "Network" , date : x , data:re});
         }
       
    });

});
router.get('/DC',function(req,res){

    material.find({"coursename" : "DC"},function(err,re){
        if (err) {console.log(err);}
        else{ 
            var now = new Date();
           var x = dateFormat(now, "ddd, mmm , yyyy");
           
            res.render('doctors/material',{coursename : "DC" , date : x , data:re});
         }
       
    });

});
router.get('/CS',function(req,res){

    material.find({"coursename" : "CS"},function(err,re){
        if (err) {console.log(err);}
        else{ 
            var now = new Date();
           var x = dateFormat(now, "ddd, mmm , yyyy");
           
            res.render('doctors/material',{coursename : "CS" , date : x , data:re});
         }
       
    });

});
router.get('/CO',function(req,res){

    material.find({"coursename" : "CO"},function(err,re){
        if (err) {console.log(err);}
        else{ 
            var now = new Date();
           var x = dateFormat(now, "ddd, mmm , yyyy");
           
            res.render('doctors/material',{coursename : "CO" , date : x , data:re});
         }
       
    });

});
router.get('/logicDesign',function(req,res){

    material.find({"coursename" : "logicDesign"},function(err,re){
        if (err) {console.log(err);}
        else{ 
            var now = new Date();
           var x = dateFormat(now, "ddd, mmm , yyyy");
           
            res.render('doctors/material',{coursename : "logicDesign" , date : x , data:re});
         }
       
    });

});
router.get('/MIS',function(req,res){

    material.find({"coursename" : "MIS"},function(err,re){
        if (err) {console.log(err);}
        else{ 
            var now = new Date();
           var x = dateFormat(now, "ddd, mmm , yyyy");
           
            res.render('doctors/material',{coursename : "MIS" , date : x , data:re});
         }
       
    });

});
router.get('/IS',function(req,res){

    material.find({"coursename" : "IS"},function(err,re){
        if (err) {console.log(err);}
        else{ 
            var now = new Date();
           var x = dateFormat(now, "ddd, mmm , yyyy");
           
            res.render('doctors/material',{coursename : "IS" , date : x , data:re});
         }
       
    });

});
router.get('/KOP',function(req,res){

    material.find({"coursename" : "KOP"},function(err,re){
        if (err) {console.log(err);}
        else{ 
            var now = new Date();
           var x = dateFormat(now, "ddd, mmm , yyyy");
           
            res.render('doctors/material',{coursename : "KOP" , date : x , data:re});
         }
       
    });

});


router.post('/uploadmaterial',function(req,res){
    var newann = new material({
        coursename: req.body.coursename ,
        material: req.body.materialtext
    });
    var coursename = req.body.coursename;
    console.log(coursename);
material.addmis(newann,function(err,op){
    if (err) throw err;
});

 res.redirect('/managerfour/'+coursename);
})



module.exports = router;