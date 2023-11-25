const router = require('express').Router()
const accountCtrl = require('../../controllers/accounts')

//CRUD-READ allAccount --> http://localhost:4000/api/accounts-register
router.get('/', accountCtrl.getAccounts)

//CRUD-CREATE a new account --> http://localhost:4000/api/accounts-register
router.post('/', accountCtrl.createAccount)

//CRUD-READ a single account --> http://localhost:4000/api/accounts-register/id
router.get('/:id', accountCtrl.getAccount)

//CRUD-UPDATE an account --> http://localhost:4000/api/accounts-register/id
router.patch('/:id', accountCtrl.updateAccount)

//CRUD-DELETE an accountt --> http://localhost:4000/api/accounts-register/id
router.delete('/:id', accountCtrl.deleteAccount)


module.exports = router