const express = require('express')
const router = express.Router();
const { user } = require('../validator')
const UserService = require('../services/user')
const userService = new UserService();

router.get('/users',  async (req, res) => {
    return await userService.getUsers(req, res)
})

router.post('/user/signup', user.create.body, async (req, res) => {
    return await userService.createNewUser(req, res)
})

router.get('/user/:id', user.get.params, (req, res) => {
    return userService.getUserById(req, res)
})

module.exports = {
    router: router
}