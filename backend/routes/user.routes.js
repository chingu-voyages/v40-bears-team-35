const UserController = require('../controllers/user.controllers')

module.exports = (app) => {
    app.post('/api/user/login', UserController.login)
    app.post('/api/user/register', UserController.register)
}