const Account = require('../models/accounts')
const mongoose = require('mongoose')

//CRUD-READ an account --> http://localhost:4000/api/accounts-register
exports.getAccounts = async (req, res) => {
    try {

        let getAccounts 

        if(req.query._limit){
            getAccounts = await Account.find().limit(req.query._limit).sort({createdAt: -1})
        }else{
            getAccounts = await Account.find().sort({createdAt: -1})
        }
        
        res.status(200).json(getAccounts)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

//CRUD-CREATE a account --> http://localhost:4000/api/accounts-register
exports.createAccount = async (req, res) => {
    
    try {
        const createAccount = new Account({
            title: req.body.title, 
            username: req.body.username, 
            password: req.body.password,
            website: req.body.website,
        })
        await createAccount.save()
        res.status(200).json({createAccount, success: 'Account added successfully.'})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

//CRUD-READ a single account --> http://localhost:4000/api/accounts-register/id
exports.getAccount = async (req, res) => {
    try {

        if(!mongoose.Types.ObjectId.isValid(req.params.id)){
            return res.status(404).json({error: 'Invalid data id'})
        }
       
        const getAccount = await Account.findById(req.params.id)

        if(!getAccount){
            return res.status(400).json({error: 'No such account'})
        }
        res.status(200).json(getAccount)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

//CRUD-UPDATE an account --> http://localhost:4000/api/accounts-register/id
exports.updateAccount = async (req, res) => {
    try {
       
        if(!mongoose.Types.ObjectId.isValid(req.params.id)){
            return res.status(404).json({error: 'Invalid data id'})
        }

        const updateAccount = await Account.findByIdAndUpdate(req.params.id, req.body, {new: true})

        if(!updateAccount){
            return res.status(400).json({error: 'No such account'})
        }
        res.status(200).json({updateAccount, success: 'Account updated successfully.'})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

//CRUD-DELETE an account --> http://localhost:4000/api/accounts-register/id
exports.deleteAccount = async (req, res) => {
    try {
        if(!mongoose.Types.ObjectId.isValid(req.params.id)){
            return res.status(404).json({error: 'Invalid data id'})
        }

        const deleteAccount = await Account.findByIdAndDelete(req.params.id)

        if(!deleteAccount){
            return res.status(400).json({error: 'No such account'})
        }
        res.status(200).json({deleteAccount, success: 'Account deleted successfully'})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}




