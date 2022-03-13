// Importar o modulo express
const express = require('express');

const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
  res.status(200);
  res.send('Rota inicial da aplicação');
});

app.get('/:me', (req, res) => {
    res.status(200);
    res.send(`Eu sou ${req.params.me.toLocaleUpperCase()}`);
})

app.listen(PORT, (err) => {
  if (!err) {
    console.log(`App started on ${PORT}!`);
  } else {
    console.log('Could not start app!');
  }
});