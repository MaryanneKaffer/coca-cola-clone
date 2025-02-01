const express = require('express');
const compression = require('compression');
const path = require('path');

const app = express();
const port = 3000;      

app.use(compression({
  threshold: 0 
}));

app.use(express.static(path.join(__dirname, 'dist'), {
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.gz')) {
      res.setHeader('Content-Encoding', 'gzip');
      res.setHeader('Content-Type', 'application/javascript');
    }
    if (filePath.endsWith('.br')) {
      res.setHeader('Content-Encoding', 'br');
      res.setHeader('Content-Type', 'application/javascript');
    }
  }
}));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

app.use(express.static(path.join(__dirname, 'dist')));

