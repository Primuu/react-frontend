const express = require('express');
const path = require('path');

const app = express();

// Obsługa statycznych plików z folderu "dist"
app.use(express.static(path.join(__dirname, 'dist')));

// Przekierowanie wszystkich żądań do index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start serwera na porcie 3000
app.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});