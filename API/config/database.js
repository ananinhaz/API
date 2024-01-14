const mysql = require('mysql2');

// Criando a conexão com o banco de dados
const connection = mysql.createConnection({
  host: 'localhost', // Seu host do MySQL
  user: 'root', // Seu usuário do MySQL
  password: '123', // Sua senha do MySQL
  database: 'pecasbanco' // Nome do banco de dados
});

// Verificando se a conexão foi estabelecida com sucesso
connection.connect(error => {
  if (error) throw error;
  console.log('Conexão com o banco de dados estabelecida com sucesso!');
});

module.exports = connection;
