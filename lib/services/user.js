const Users = require('../models/users');

class UserService {
  constructor() {
  }

  async getUsers(req, res) {
    const user = await Users.query();
    return res.send(user);
  }

  async createNewUser(req, res) {
    const userDetails = req.body;
    const newuser = await Users.query().insert(userDetails)
    return res.send(newuser);
  }

  async getUserById(req, res) {
    const { id } = req.params;
    const user = await Users.query().findById(id);
    return res.send(user);
  }
}

module.exports = UserService
