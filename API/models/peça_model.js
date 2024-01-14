const connection = require('../config/database');

// Função para listar todas as peças
function listAll() {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM pecas', (error, results) => {
      if (error) reject(error);
      resolve(results);
    });
  });
}

// Função para buscar uma peça pelo id_peca
function findById(id) {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM pecas WHERE id_peca = ?', id, (error, results) => {
      if (error) reject(error);
      if (results.length === 0) {
        reject({ message: 'Peça não encontrada' });
      } else {
        resolve(results[0]);
      }
    });
  });
}

// Função para criar uma nova peça
function create(nome_peca, descr_peca) {
  return new Promise((resolve, reject) => {
    connection.query('INSERT INTO pecas (nome_peca, descr_peca) VALUES (?, ?)', [nome_peca, descr_peca], (error, results) => {
      if (error) reject(error);
      resolve(results);
    });
  });
}

// Função para atualizar uma peça existente
function update(id, nome_peca, descr_peca) {
  return new Promise((resolve, reject) => {
    connection.query('UPDATE pecas SET nome_peca = ?, descr_peca = ? WHERE id_peca = ?', [nome_peca, descr_peca, id], (error, results) => {
      if (error) reject(error);
      if (results.affectedRows === 0) {
        reject({ message: 'Peça não encontrada' });
      } else {
        resolve(results);
      }
    });
  });
}

// Função para excluir uma peça
function remove(id) {
  return new Promise((resolve, reject) => {
    connection.query('DELETE FROM pecas WHERE id_peca = ?', id, (error, results) => {
      if (error) reject(error);
      if (results.affectedRows === 0) {
        reject({ message: 'Peça não encontrada' });
      } else {
        resolve(results);
      }
    });
  });
}

module.exports = {
  listAll,
  findById,
  create,
  update,
  remove
};
