const mongoose = require('mongoose')
require('dotenv').config()


const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
            .then(() => console.log("Successfully connected on the databases"))
    } catch (error) {
        console.log(error.message)
    }
}  

module.exports = connect()

// { useNewUrlParser: true, useUnifiedTopology: true}