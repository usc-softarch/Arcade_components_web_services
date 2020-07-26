const express = require('express')
require('./src/db/mongoose')
const app = express()
const cors = require('cors')
app.use(cors())

//Use json to parser requests
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Passport config
const session = require('express-session')
app.use(session({
    secret: 'secret session',
    resave: false,
    saveUninitialized: true
}))

const passport = require('passport')
require('./src/config/auth')(passport)
app.use(passport.initialize())
app.use(passport.session())

//Initializing app routers
const userRouter = require('./src/routes/user')
app.use('/account/', userRouter)

//App listener
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log('Server is up on port: ' + port)
})

