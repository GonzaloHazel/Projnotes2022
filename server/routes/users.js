// ES6 👇 ES5 👉var express = require('express');
import express from 'express';
// ES6 👇 ESC5 👉var router = express.Router();
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('!!Welcome Babel-Nodemon 🗼👺');
});

module.exports = router;
