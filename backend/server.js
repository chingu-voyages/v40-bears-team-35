const express  = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const app = express()


require('./config/mongoose.config')
app.use(cookieParser())
app.use(cors({credentials: true, origin: 'http://localhost:3000'}))
app.use(express.json(), express.urlencoded({extended: true}))
require('./routes/recipe.routes')(app)
require('./routes/user.routes')(app)
app.listen(8000, () => {
    console.log('Listening at Port 8000')
})