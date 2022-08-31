const User = require('../models/user.models')
const bcrypt = require('bcrypt')

module.exports.register = async(req, res) => {
    const { username, password, confirm, email } = req.body
    if(confirm !== password) {
        res.status(400).json({confirm: 'Password does not match'})
    }
    const existEmail = await User.exists({email: email})
    const existUsername = await User.exists({username: username})
    if (username) {
        res.status(400).json({username: 'Username exist'})
    }
    if (existEmail) {
        res.status(400).json({email: 'Email exist'})
    } else {
        User.create({
            username,
            password,
            email
        })
        .then(resp => res.json(resp))
        .catch(err => res.json(err))
    }
}

module.exports.login = async(req, res) => {
    const { username, password } = req.body
    const user = await User.findOne({username: username})
    const validPassword = await bcrypt.compare(password, user.password)
    if(validPassword) {
        res.status(200).json({message: 'ok', id: user._id})
    } else {
        res.status(404).json({message: 'Invalid Username/Password'})
    }
}