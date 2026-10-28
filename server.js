const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const usuarios = [];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/cadastro', (req, res) => {
  const { nome, email, senha } = req.body;

  if (!nome || !email || !senha || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({
      mensagem: 'Preencha todos os campos com dados válidos.'
    });
  }

  usuarios.push({ nome, email, senha });
  res.json({ mensagem: 'Cadastro realizado com sucesso!' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Aplicação rodando na porta ${PORT}`);
});
