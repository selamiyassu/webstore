// db.js
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/MWA', function(err) {
    if (err) throw err;
    console.log('Successfully connected to MongoDB');
});