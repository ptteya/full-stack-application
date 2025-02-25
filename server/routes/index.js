const router = require('express').Router();

const documentsController = require('../controllers/documentsController');

router.post('/documents', documentsController.create);
router.get('/documents', documentsController.getAll);
router.put('/documents/:documentId', documentsController.update);
router.get('/documents/:documentId', documentsController.getById);
router.delete('/documents/:documentId', documentsController.deleteById);

module.exports = router;