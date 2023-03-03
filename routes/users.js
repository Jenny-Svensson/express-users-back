const { v4: uuidv4 } = require('uuid');
var express = require('express');
var router = express.Router();

let users = [
  {id: uuidv4(), userName: 'Jenny', password: 12345},
  {id: uuidv4(), userName: 'Tommy', password: 23456},
  {id: uuidv4(), userName: 'Oliver', password: 34567},
];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(users);
});

module.exports = router;
