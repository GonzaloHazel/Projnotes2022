// ESC6 👇 ES5 👉 var express = require('express');
import express from 'express';
// ES6👇 ES5 👉 var router = express.Router();
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  // View-Model
  res.render('index', {
    title: 'Express',
    author: 'Gonzalo Hazel',
  });
});

module.exports = router;
