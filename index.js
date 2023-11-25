const express= require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
require('./config')


//MIDDLEWARE
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//ROUTES
app.use(require('./routes'))

//LISTEN PORT 
app.listen(process.env.PORT, () => { console.log(`Server running on port http://localhost:${process.env.PORT}`)})
