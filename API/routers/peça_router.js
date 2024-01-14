const express = require('express');
const pecaController = require('../controllers/peça_controller');

const router = express.Router();
router.get('/pecas', pecaController.listAll);
router.post('/pecas', pecaController.create);

// Rota para listar todas as peças
router.get('/pecas', pecaController.listAll);

// Rota para buscar uma peça pelo id_peca
router.get('/pecas/:id', pecaController.findById);

// Rota para criar uma nova peça
router.post('/pecas', pecaController.create);

// Rota para atualizar uma peça existente
router.put('/pecas/:id', pecaController.update);

// Rota para excluir uma peça
router.delete('/pecas/:id', pecaController.remove);

module.exports = router;
