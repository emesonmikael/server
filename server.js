
const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 5000;

// Configuração do multer para salvar o arquivo no diretório desejado
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, 'public')); // Define a pasta onde o arquivo será salvo
  },
  filename: (req, file, cb) => {
    cb(null, 'your-file.xlsx'); // Nome fixo para substituir o arquivo existente
  },
});

const upload = multer({ storage });

app.use(express.static('public'));

// Rota para receber o arquivo
app.post('/upload', upload.single('file'), (req, res) => {
  res.send({ message: 'File uploaded successfully' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});