const User = require('../models/users');

class UserService {
  constructor() {

  }

  async createNewUser(req, res) {
    const userDetails = req.body;
    const newuser = await User.query().insert(userDetails)
    return res.send(newuser);
  }

  async getUserById(req, res) {
    const { id } = req.params;
    const user = await User.query().findById(id);
    return res.send(user);
  }
}

module.exports = UserService
