const express = require('express')
const router = express.Router();
const controller = require('../controllers/articleController')

router.get('/', controller.findAllArticle)
router.post('/', controller.createArticle)
router.get('/:id', controller.findByIdArticle)
router.put('/:id', controller.updateArticle)
router.delete('/:id', controller.deleteArticle)

module.exports = router
