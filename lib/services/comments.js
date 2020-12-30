const Queries = require('../models/queries');
// const Users = require('../models/users');
const Comments = require('../models/comments');
const { user } = require('../validator');

// var jwt = require('jsonwebtoken');
// // const { secret } = require('./config');
// const { query } = require('../models/queries');

class CommentService {
  constructor() {
  }

  // add new query
  async commentOnQuery(req, res) {
    const newComment = req.body;
    const userId = newComment.userId
    const queryId = newComment.queryId
    console.log(req.body)

    const userData = await Queries.query().where({ 'userId': userId, 'id': queryId });
    console.log(userData)
    if (userData[0]) {
      const commentAdded = await Comments.query().insert(newComment)
      console.log(commentAdded)
      return res.status(201).send(commentAdded);
    }
    else {
      res.send("user not exist")
    }
  }

  async getAllComment(req, res) {
    try {
      const commentList = await Comments.query();
      return res.status(200).send(commentList);
    }
    catch (err) {
      res.send({
        sucess: 0,
        message: err
      });
    }
  }

}

module.exports = CommentService
