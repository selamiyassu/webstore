var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/MWA',{useMongoClient: true});

var productSchema = mongoose.Schema({
    productId:Number,
    name:String,
    src:String,
    price:Number,
    info:String,
    profilePicture: Buffer
});

var paymentSchema = mongoose.Schema({
    cardType: String,
    cardnumber:String,
    securitycode:String,
    exprirationdate:String
});

var Product = mongoose.model('Product', productSchema);
var Payment = mongoose.model('Payment',paymentSchema);
var product1 = new Product({
    productId: 1, name: 'Nexus S', src: "/assets/img/phones/nexus-s.0.jpg", price: 99.99,
    info: "The Nexus S is a smartphone co-developed by Google and Samsung and manufactured by Samsung Electronics for release in 2010. It was the first smartphone to use the Android 2.3 Gingerbread operating system, and the first Android device to support Near Field Communication (NFC)."
});
var product2=new Product({
    productId: 2, name: 'Dell Venue', src: "/assets/img/phones/dell-venue.0.jpg", price: 109.99,
    info: "The Dell Venue is a line of Android smartphones and tablets manufactured by Dell. The first Dell Venue was released for both T-Mobile and AT&T in the United States, and for KT in South Korea. It was the second Dell smartphone to be released in the US and features the Dell Stage UI also found on the Dell Streak line of tablets."
});
var product3=new Product({
    productId: 3, name: 'Droid 2', src: "/assets/img/phones/droid-2-global-by-motorola.0.jpg", price: 89.99,
    info: "The Motorola Droid 2 is the fifth phone in Verizon's Droid line. It runs the Android operating system by Google, and can run Flash Player 10.1. It comes with 8 GB of internal memory and is shipped with an additional 8 GB SDHC card, upgradable to 32 GB. It has a 3.7 in display and a 5-megapixel camera."
})
var product3=new Product({
    productId: 4, name: 'Droid Pro', src: "/assets/img/phones/droid-pro-by-motorola.0.jpg", price: 129.99,
    info: "The Motorola Droid Pro is an Android-based smartphone manufactured by Motorola and released on November 18, 2010, for Verizon Wireless and June 5, 2011, for Sprint. These devices are available for Verizon, Sprint and Boost Mobile in the United States, and are designed for business users."
})
var product4=new Product({ productId: 4, name: 'Droid Pro', src: "/assets/img/phones/droid-pro-by-motorola.0.jpg", price: 129.99,
    info: "The Motorola Droid Pro is an Android-based smartphone manufactured by Motorola and released on November 18, 2010, for Verizon Wireless and June 5, 2011, for Sprint. These devices are available for Verizon, Sprint and Boost Mobile in the United States, and are designed for business users."

});
var product5=new Product({
    productId: 5, name: 'Motorola Bravo', src: "/assets/img/phones/motorola-bravo-with-motoblur.0.jpg", price: 119.99,
    info: "The Motorola Bravo has a nice 3.7 inch WVGA display, a slim build, and a multimedia-friendly feature set that includes DLNA support. It has good call quality as well. The Motorola Bravo is a midrange Android smartphone with solid multimedia features."
});

var customerSchema =  mongoose.Schema({
    fName: {type: String, index: true},
    email: {type: String, index: true},
    phone: String,
    username: {type: String, index: true},
    password:String,
    shippingaddress: String,
    billingaddress: String,
    payment:[paymentSchema],
    cart:[ productSchema ]
});

var Customer = mongoose.model('Customers',customerSchema);
var pay1 = new Payment({
    cardType: 'VISA',
    cardnumber:'123456789011',
    securitycode:'123',
    exprirationdate:'0320'
});

var pay2 = new Payment({
    cardType: 'MASTERCARD',
    cardnumber:'432156789345',
    securitycode:'567',
    exprirationdate:'0922'
});

var cust1 = new Customer({
    fName: 'selam',
    email: 'selam@gmail.com',
    phone: '5107766310',
    username: 'selam',
    password:'123',
    shippingaddress: '2000 N court 5G Fairfield, IA 52556',
    billingaddress: '2000 N court 5G Fairfield, IA 52556',
    payment:[pay1],
    cart:[product1]
});
var cust2 = new Customer({
    fName: 'haben',
    email: 'haben@gmail.com',
    phone: '2063315091',
    username: 'haben',
    password:'123',
    shippingaddress: '2000 N court 7G',
    billingaddress: '2000 N court 7G',
    payment:[pay2 ]
});

module.exports = {
    product1,
    product2,
    product3,
    product4,
    product5,
    Product,
    Customer,
    Payment,
    cust1,
    cust2
};