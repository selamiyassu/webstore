var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
var Customer = require('../models/Customer');

router.use(bodyParser.json());
/*router.all("/*", function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
});*/
/*
router.use(function (req, res, next) {
    console.log('Request URL:', req.originalUrl)
    next()
}, function (req, res, next) {
    console.log('Request Type:', req.method)
    next()
});*/


// RETURNS ALL THE Custmoer IN THE DATABASE
router.get('/hello', function (req, res) {
    console.log("aaaaaaaaaa hellooooooooooooooo");
    res.send('hellloooooooooooooooooooooooooooo');
});

// CREATES A NEW Custmoer
router.post('/add', function (req, res) {
    console.log("aaaaaaaaaa"+req.body.fName);
    Customer.create({
            fName: req.body.fName,
            email: req.body.email,
            phone: req.body.phone,
            username: req.body.username,
            password:req.body.password,
            shippingaddress:"",//req.body.shippingaddress,
            billingaddress:"",//req.body.billingaddress,
            cart:[],
            payment: []
        },
        function (err, cust) {
            if (err) return res.status(500).send(err);
            //product5.save((err)=>{
                //     if(err) throw err;
                // });
            res.status(200).send(cust);
        });
});

// RETURNS ALL THE Custmoer IN THE DATABASE
router.get('/', function (req, res) {
    Customer.find({}, function (err, cust) {
        if (err) return res.status(500).send("There was a problem finding the Custmoer.");
        res.status(200).send(cust);
    });
});
//
router.post('/authenticate', function (req, res) {
    console.log('email: ' + req.body.email);
    console.log('password: ' + req.body.password);
    Customer.find({email:req.body.email, password : req.body.password}, function (err, customer) {
        if (err) return res.status(500).send("There was a problem Authentication.");
        console.log(customer);
        //if(customer.length > 0)
            res.status(200).send(
                     customer
                );
/*
        res.status(200).send(
            res.json({
                status: 0
              })
        );*/
    });
});

module.exports = router;