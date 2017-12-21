// User.js
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 19791901;
const UserSchema = new mongoose.Schema({
  fName: {type: String, required: true},
  email: {type: String, required: true},
  phone: {type: String, required:true},
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true}
});

UserSchema.pre('save', function(next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

const User = mongoose.model('User', UserSchema);
UserSchema.methods.getFullName = function () { return this.firstName + " "+ this.lastName;
};
module.exports = User;


/*var personSchema = new Schema({ name: { first: String, last: String } }); var Person = mongoose.model('Person', personSchema);
var person = new Person({ name: { first: 'Tim', last: 'Cook' } });*/

/*
UserSchema.virtual('fullName')
    .get(() => { return this.firstName + ' ' + this.lastName; })
    .set(() => (v) {
    this.firstName = v.substr(0, v.indexOf(' '));
    this.lastName = v.substr(v.indexOf(' ') + 1); });
console.log(UserSchema.fullName); */