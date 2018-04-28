var bodyparser = require('body-parser');
var urlencodedParser = bodyparser.urlencoded({ extended:false}) 

//var data = [{item:'Milk'},{item:'Tobaco'},{item:'Cheese'}];

module.exports = function(app){

    app.get('/',function(req,res){
        
       res.redirect('/users/login'); 
    });
    app.get('/homie',function(req,res){
        res.sendFile("c:/Users/gamal/Desktop/portal/public/html/template/index.html");
    });
    
    app.post('/todo',urlencodedParser,function(req,res){
        //data.push(req.body);
        //data.pop(req.body); 
        
    });
    
    app.delete('/todo',function(req,res){
        
    });


};