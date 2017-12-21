const express = require('express');
const router = express.Router();
const Product = require('./schema').Product;
const product1 = require('./schema').product1;
const product2 = require('./schema').product2;
const product3 = require('./schema').product3;
const product4 = require('./schema').product4;
const product5 = require('./schema').product5;
const selam = require('./schema').cust1;
const haben = require('./schema').cust2;

router.get('/',(req,res) => {
    res.send('app works');
});
// Get products
router.get('/all', (req, res) => {
   // console.log("server/api");
        // product1.save((err)=>{
        //     if(err) throw err;
        // });
        // product2.save((err)=>{
        //     if(err) throw err;
        // });
        // product3.save((err)=>{
        //     if(err) throw err;
        // });
        // product4.save((err)=>{
        //     if(err) throw err;
        // });
        // product5.save((err)=>{
        //     if(err) throw err;
        // });
        // selam.save((err)=>{
        //     if(err) throw err;
        // });
        // haben.save((err)=>{
        //     if(err) throw err;
        //  });

        Product.find()
            .exec(function(err, data){
                if(err){
                     res.json(err)
                } else {
                    // console.log(data)
                   //  console.log(data.length)
                     res.json(data)
            }
        });
});

module.exports = router;