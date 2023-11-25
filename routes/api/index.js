const router = require('express').Router()


router.get('/', (req, res) => {
    res.json({message: 'Welcome to api workout'})
})


//http://localhost:4000/api/accounts-register
router.use('/accounts-register', require('./accounts'))



module.exports = router