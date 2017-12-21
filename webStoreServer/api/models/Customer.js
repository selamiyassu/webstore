
const mongoose = require('mongoose');
var CustomerSchema = new mongoose.Schema({
    fName: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: String, required: false},
    username:{type: String, required: true},
    password: {type: String, required: true},
    shippingaddress:{type: String, required: false},
    billingaddress:{type: String, required: false},
    cart: {type:Array},
    payment:{type:Array}

});
/*
CustomerSchema.methods.add = function () {
    return new Promise((resolve, reject) => {

        newUser = this;

        newUser.save(function (err) {
            if (err) {
                reject({
                    message: err,
                    status: 0
                })
            } else {
                console.log("user Added Successfully !");
                resolve({
                    message: "New User Added",
                    status: 1
                })
            }
        })
    })
}*/

const Customer = mongoose.model('Customer', CustomerSchema);
module.exports = Customer;