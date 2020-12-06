const express = require('express')
const router = express.Router();
const { user } = require('../validator')
const UserService = require('../controllers/user')
const userService = new UserService();

router.post('/users', user.create.body, async (req, res) => {
    return await userService.createNewUser(req, res)
})

router.get('/users/:id', user.get.params, (req, res) => {
    return userService.getUserById(req, res)
})

module.exports = {
    router: router
}