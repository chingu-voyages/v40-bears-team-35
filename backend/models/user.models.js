const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required']
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required']
    }
}, {timestamps: true})

UserSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10) {
        .then(hash => {
            this.password = hash
            next()
        })
    }
})

const User = mongoose.model("Users", UserSchema)
module.exports = User