const express = require('express')
const fileUpload=require('express-fileupload')
const app = express()
const cors = require('cors')
app.use(cors())

//Use json to parser requests
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(fileUpload({
    limits: { fileSize: 100 * 1024 * 1024 },
}));


//Initializing app routers
const engineRouter = require('./src/routes/engine')
app.use('/engine/mallet', engineRouter)
//App listener
const port = process.env.PORT || 3017
app.listen(port, () => {
    console.log('Server is up on port: ' + port)
})

