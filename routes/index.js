const router = require('express').Router()

//http://localhost:4000/api/
router.use('/api', require('./api'))

router.get('/', (req, res) => {
    res.json({msg: 'API INDEX'})
})

module.exports = router