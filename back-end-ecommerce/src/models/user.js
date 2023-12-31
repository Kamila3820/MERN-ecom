const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        min: 2,
        max: 20
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        min: 2,
        max: 20
    },
    userName: {
        type: String,
        required: false,
        trim: true,
        unique: true,
        index: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    hash_password: {
        type: String,
        required: true,
        
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    contactNumber: { type: String },
    profilePicture: { type: String }

}, {timestamps: true } );


userSchema.virtual('password').set(function(password) {
    if (password) {
      this._password = password; // Store the plain text password temporarily
      this.hash_password = bcrypt.hashSync(password, 10); // Hash the password + 10 salts
    }
});
  
userSchema.virtual('fullName').get(function(){
    return `${this.firstName} ${this.lastName}`
});

userSchema.methods = {
    authenticate: function(password){
        return bcrypt.compareSync(password, this.hash_password); //To check the password is true/false
    }
}


module.exports = mongoose.model('User', userSchema);