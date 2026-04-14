const express = require('express');
const path = require('path');
const fs = require('fs');
const compression = require('compression');

const app = express();
const PORT = process.env.PORT || 3000;

// Cerca il file HTML principale in questo ordine
const htmlCandidates = [
  path.join(__dirname, 'public', 'index.html'),
  path.join(__dirname, 'index.html'),
  path.join(__dirname, 'federico-pellati-website.html'),
];

const htmlFile = htmlCandidates.find(f => fs.existsSync(f));

if (!htmlFile) {
  console.error('ERRORE: nessun file HTML trovato. Controlla la struttura del repo.');
  process.exit(1);
}

const publicDir = path.dirname(htmlFile);
const mainHtml  = path.basename(htmlFile);

console.log('File HTML trovato:', htmlFile);
console.log('Serving da:', publicDir);

app.use(compression());

app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  next();
});

app.use(express.static(publicDir, { maxAge: '7d', etag: true }));

// Tutte le rotte → file HTML principale
app.get('*', (req, res) => {
  res.sendFile(path.join(publicDir, mainHtml));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server avviato su porta ${PORT}`);
});
