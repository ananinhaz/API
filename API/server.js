const express = require('express');
const bodyParser = require('body-parser');
const pecaRouter = require('./routers/peça_router');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', pecaRouter);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
