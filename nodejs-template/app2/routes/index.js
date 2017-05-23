var express = require('express');
var router = express.Router();
var request = require('request');



/* GET home page. */
router.get('/', function(req, res, next) {


    request.put("http://127.0.0.1:8080/message/reqRes/microservices_app1",
        function(err, data){
            var response = data.body;
            res.render('index', { title: 'app2' , response: response});
        });
});


router.put("/dmp", function(req,res, next){
    res.send("Hello from app2")
});


request.put({url: "http://127.0.0.1:8080/namespace", json:{"contact-point": "http://127.0.0.1:3000/dmp", "Namespace": "microservices_app2"}});

module.exports = router;
