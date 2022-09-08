const User = require('../models/user.models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports.register = async(req, res) => {
    const { username, password, confirm, email } = req.body
    if(confirm !== password) {
        return res.status(400).json({confirm: 'Password does not match'})
    }
    const existEmail = await User.exists({email: email})
    const existUsername = await User.exists({username: username})
    if (existUsername) {
        return res.status(400).json({username: 'Username exist'})
    }
    if (existEmail) {
        return res.status(400).json({email: 'Email exist'})
    } else {
        User.create({
            username,
            password,
            email
        })
        .then(resp => {
            const payload = {
                _id : resp._id,
                username: resp.username
            }
            const userToken = jwt.sign(payload, process.env.SECRET_KEY)
            res.cookie('userToken', userToken, process.env.SECRET_KEY, {
                httpOnly: true
            })
            .json(resp)
        })
        .catch(err => res.json(err))
    }
}

module.exports.login = async(req, res) => {
    const { username, password } = req.body
    const user = await User.findOne({username: username})
    const validPassword = await bcrypt.compare(password, user.password)
    if(validPassword) {
        const payload  = {
            _id: user._id,
            username: user.username
        }
        const userToken = jwt.sign(payload, process.env.SECRET_KEY)
        res.cookie('userToken', userToken, process.env.SECRET_KEY, {
            httpOnly: true
        })
        .json({_id: user._id, username: user.username})
    } else {
        res.status(404).json({message: 'Invalid Username/Password'})
    }
}

module.exports.logout = (req, res) => {
    res.clearCookie('userToken')
    res.sendStatus(200)
}

module.exports.relogin = (req, res) => {
    const { _id } = res.locals.payload
    User.findOne({_id: _id})
    .then(resp => res.json({_id: resp._id, username: resp.username}))
    .catch(err => res.json(err))
}