var express = require('express');
var router = express.Router();

var materials = require('../models/materials');
var announcments = require('../models/announcments');
var discussions = require('../models/discussions');
var profs = require('../models/profs');
var announcements = require('../models/announcments');
var User = require('../models/user');
var nodemailer = require('nodemailer');

var dateFormat = require('dateformat');

router.post('/addprof',function(req,res){

    var name = req.body.name;
	var password = req.body.password;
	var username = req.body.username;
    var email = req.body.email;

    var newprof = new profs({
        name: name,
        email:email,
        username: username,
        password: password,
    });

    var param = [];
    param[0]= 'd'+username;
    param[1]= name;
    param[2]= email;
    param[3]= password;

    profs.getprofByUsername(username,function(err, resul){ 

        if(err) throw err;
        
        console.log(resul);

        if(resul){res.redirect('/'); }else{

    User.createUser( param, function(err, stud){

        if(err) {throw err;}
    
    });

    profs.addmis(newprof , function(err,bobo){
        if (err){console.log('Somthing wrong with addProfs');}
    });

    res.sendFile("c:/Users/gamal/Desktop/portal/public/html/template/index.html");
}
   });



});

   router.get('/Security',function(req,res){

    announcements.find({"coursename" : "Security"},function(err,re){
        if (err) {console.log(err);}
        else{ 
            var now = new Date();
           var x = dateFormat(now, "ddd, mmm , yyyy");
           
            res.render('doctors/announcement',{coursename : "Security" , date : x , data:re});
         }
       
    });

});

router.get('/Network',function(req,res){

    announcements.find({"coursename" : "Network"},function(err,re){
        if (err) {console.log(err);}
        else{ 
            var now = new Date();
           var x = dateFormat(now, "ddd, mmm , yyyy");
           
            res.render('doctors/announcement',{coursename : "Network" , date : x , data:re});
         }
       
    });

});
router.get('/DC',function(req,res){

    announcements.find({"coursename" : "DC"},function(err,re){
        if (err) {console.log(err);}
        else{ 
            var now = new Date();
           var x = dateFormat(now, "ddd, mmm , yyyy");
           
            res.render('doctors/announcement',{coursename : "DC" , date : x , data:re});
         }
       
    });

});
router.get('/CS',function(req,res){

    announcements.find({"coursename" : "CS"},function(err,re){
        if (err) {console.log(err);}
        else{ 
            var now = new Date();
           var x = dateFormat(now, "ddd, mmm , yyyy");
           
            res.render('doctors/announcement',{coursename : "CS" , date : x , data:re});
         }
       
    });

});
router.get('/CO',function(req,res){

    announcements.find({"coursename" : "CO"},function(err,re){
        if (err) {console.log(err);}
        else{ 
            var now = new Date();
           var x = dateFormat(now, "ddd, mmm , yyyy");
           
            res.render('doctors/announcement',{coursename : "CO" , date : x , data:re});
         }
       
    });

});
router.get('/logicDesign',function(req,res){

    announcements.find({"coursename" : "logicDesign"},function(err,re){
        if (err) {console.log(err);}
        else{ 
            var now = new Date();
           var x = dateFormat(now, "ddd, mmm , yyyy");
           
            res.render('doctors/announcement',{coursename : "logicDesign" , date : x , data:re});
         }
       
    });

});
router.get('/MIS',function(req,res){

    announcements.find({"coursename" : "MIS"},function(err,re){
        if (err) {console.log(err);}
        else{ 
            var now = new Date();
           var x = dateFormat(now, "ddd, mmm , yyyy");
           
            res.render('doctors/announcement',{coursename : "MIS" , date : x , data:re});
         }
       
    });

});
router.get('/IS',function(req,res){

    announcements.find({"coursename" : "IS"},function(err,re){
        if (err) {console.log(err);}
        else{ 
            var now = new Date();
           var x = dateFormat(now, "ddd, mmm , yyyy");
           
            res.render('doctors/announcement',{coursename : "IS" , date : x , data:re});
         }
       
    });

});
router.get('/KOP',function(req,res){

    announcements.find({"coursename" : "KOP"},function(err,re){
        if (err) {console.log(err);}
        else{ 
            var now = new Date();
           var x = dateFormat(now, "ddd, mmm , yyyy");
           
            res.render('doctors/announcement',{coursename : "KOP" , date : x , data:re});
         }
       
    });

});

var studentsnames;

router.post('/fillannouncement',async function(req,res){
    var newann = new announcements({
        coursename: req.body.coursename ,
        announcment: req.body.announcementtext
    });
    var coursename = req.body.coursename;
announcements.addmis(newann,function(err,op){
    if (err) throw err;
});
     var tempname = coursename.toLocaleLowerCase();
     let u;
     let p;
     
     if(tempname == 'is'){tempname = 'iss'}
     if(tempname == 'logicdesign'){tempname = 'logicDesign'}

       var mod = require('../models/'+tempname);
       u = await mod.find({},{"Username":1,"_id":0}, function(err,stdnames){
           if(err) throw err;
             studentsnames = stdnames;
             });
             console.log(studentsnames);
             
             

       for(var us = 0 ; us<studentsnames.length ; us++){
         
        let p = await User.std.find({"username": studentsnames[us].Username },{"email":1,"_id":0}, function(err , emails){
            if(err) throw err;
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'jemy20200@gmail.com',
                    pass: 'elma3alem7eta'
                }
            });
    
            var mailOptions = {
                from: '"college" <yourcollege@fcih.edu>',
                to: emails[0].email,
                subject: tempname+' announcment',
                text: 'Check new announcement on course: ' +  tempname
            };
    
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });
                       });
                 }   
           studentsemails=[];

        

    res.redirect('/managertwo/'+coursename);
});




module.exports = router;