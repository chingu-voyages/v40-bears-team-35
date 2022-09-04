const UserController = require('../controllers/user.controllers')
const { authenticate } = require('../config/jwt.config')

module.exports = (app) => {
    app.post('/api/user/login', UserController.login)
    app.post('/api/user/register', UserController.register)
    app.get('/api/user', authenticate, UserController.relogin)
    app.get('/api/user/logout', UserController.logout)
}