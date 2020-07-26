require('dotenv').config();
const config = require('../config/config.json');
const mongoose = require('mongoose')

// mongoose.connect('mongodb://127.0.0.1/datsets', {
mongoose.connect(process.env.MONGODB_URI || config.connectionString, {
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log('connected successfully')
})
.catch(err => { // mongoose connection error will be handled here
    console.error('App starting error:', err.stack);
    process.exit(1);
});

mongoose.set('debug', true);