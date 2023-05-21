const express = require('express');
const router = express.Router();
const getAllTypes = require('../controllers/getAllTypes');

router.get('/types', getAllTypes);

module.exports = router;