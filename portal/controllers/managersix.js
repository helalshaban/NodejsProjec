var express = require('express');
var router = express.Router();
var users = require('../routes/users');
var dateFormat = require('dateformat');
var user = require('../models/user');

var dateFormat = require('dateformat');
var material = require('../models/materials');
var opencourses = require('../models/opencourses');

var uro = 50;
var hbda;




router.get('/stdgroups', function(req,res){

    var username = users.couser;
    var x="";
    //split username to remove {a,d,s}
    for(var i=0;i<username.length-1;i++){
      x += username[i+1];
    }

    

    // find the dept of the logged student
    user.std.find({"username":x},{"depo":1 , "_id":0} ,function(err,ref){
       
        if (err) throw err;
         
        
        else{
           
            //courses of student dept
            opencourses.opo.find({"dept":ref[0].depo},{"name":1 , "_id":0},function(err,courses){
                if (err) {console.log(err);}
                else{ 
                    hbda = uro - courses.length;
                    console.log(hbda);
                    var arrs = [];
                  
                    for(var tb=0 ; tb<courses.length; tb++){
                        arrs.push(tb);
                        

                        var y = courses[tb].name.toLocaleLowerCase();
                        if (y === 'is') { y = 'iss' ; }
                        if (y === 'logicdesign') {y ='logicDesign';}

                      myfunc(x,y,arrs,hbda,res);

                  
                      
                        
                    }
                   
                   
                 }
                 
               
            });
               
            }
        }); 

});

var mbc = [];
var two = [];
var myfunc = function(x, y,arrs,hbda,res){

    var md = require('../models/'+y);


    md.find({"Username" : x},{"_id":0}, function(err,grades){
        var em = [];
        if (err) throw err;
        uro--; 
        if(!grades[0]){
        console.log('null');}else{
            mbc.push(grades);
            two.push(y);
        }
        

         if(hbda === uro){
            for(var bs=0;bs<two.length;bs++){
                if (two[bs] === 'iss'){ two[bs]= 'is'}
               // if (two[bs] === 'logicDesign'){ two[bs]= ''}
            } 
            res.render('students/stdgroups',{coursename : two , data:mbc}); uro = 50; coursename = em; mbc = em;}
    });
  
}






module.exports = router;