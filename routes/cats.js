const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  response = { cats: ['ivy', 'jenny'] };
  res.send(response);
});

module.exports = router;
