const Model = require('./index');
const Joi = require('joi')

class Queries extends Model {

  static get tableName() {
    return 'queries';
  }

  static get joiSchema() {
    return Joi.object({
      id: Joi.number().integer(),
      issue: Joi.string().required(),
      topic: Joi.string(),
      like: Joi.number().integer(),
      userId: Joi.number().integer(),
      createdAt: Joi.date().required(),
    });
  }

  async $beforeInsert() {
    const now = new Date();
    this.created_at = now;
  }
}

module.exports = Queries;