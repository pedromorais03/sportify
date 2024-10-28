const express = require('express')
const router = express.Router();
const RecipeController = require('../controllers/RecipeController');

router.get('/', RecipeController.getAll)
router.post('/', RecipeController.create)

module.exports = router