const Model = require('./index');
const Joi = require('joi')

class User extends Model {
  
  static get tableName() {
    return 'users';
  }

  static get joiSchema() {
    return Joi.object({
      id: Joi.number().integer(),
      f_name: Joi.string(),
      l_name: Joi.string(),
      username: Joi.string(),
      email: Joi.string(),
      created_at: Joi.date().required(),
    });
  }

  async $beforeInsert() {
    const now = new Date();
    this.created_at = now;
  }
}

module.exports = User;