const Peca = require('../models/peça_model');

// Função para listar todas as peças
async function listAll(req, res) {
  try {
    const pecas = await Peca.listAll();
    res.json(pecas);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar as peças' });
  }
}

// Função para buscar uma peça pelo id_peca
async function findById(req, res) {
  const { id } = req.params;
  try {
    const peca = await Peca.findById(id);
    res.json(peca);
  } catch (error) {
    res.status(404).json({ message: 'Peça não encontrada' });
  }
}

// Função para criar uma nova peça
async function create(req, res) {
  const { nome_peca, descr_peca } = req.body;
  try {
    await Peca.create(nome_peca, descr_peca);
    res.status(201).json({ message: 'Peça criada com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar a peça' });
  }
}

// Função para atualizar uma peça existente
async function update(req, res) {
  const { id } = req.params;
  const { nome_peca, descr_peca } = req.body;
  try {
    await Peca.update(id, nome_peca, descr_peca);
    res.json({ message: 'Peça atualizada com sucesso' });
  } catch (error) {
    res.status(404).json({ message: 'Peça não encontrada' });
  }
}

// Função para excluir uma peça
async function remove(req, res) {
  const { id } = req.params;
  try {
    await Peca.remove(id);
    res.json({ message: 'Peça excluída com sucesso' });
  } catch (error) {
    res.status(404).json({ message: 'Peça não encontrada' });
  }
}

module.exports = {
  listAll,
  findById,
  create,
  update,
  remove
};
