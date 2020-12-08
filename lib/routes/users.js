const express = require('express')
const router = express.Router();
const { user } = require('../validator')
const UserService = require('../services/user')
const userService = new UserService();

const {checkToken} = require('../auth/auth');


router.get('/users',  async (req, res) => {
    return await userService.getUsers(req, res)
})

router.post('/user/signup', user.create.body, async (req, res) => {
    return await userService.createNewUser(req, res)
})

router.get('/user/:id',checkToken, user.get.params,  ( decoded,req, res, next) => {
    return userService.getUserById(decoded, req, res)
})

router.put('/user/update/:id',checkToken, user.get.params, (req, res) => {
    return userService.updateUser(req, res)
})

router.post('/login', user.login.body,  async (req, res) => {
    return await userService.logIn(req, res)
})

module.exports = {
    router: router
}