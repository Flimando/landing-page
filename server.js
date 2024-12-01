const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Statische Dateien
app.use(express.static('public'));

// API-Endpunkt für Server-Status
app.get('/api/server-status', (req, res) => {
    // Hier würden Sie den tatsächlichen Serverstatus abrufen
    res.json({ status: 'Läuft' });
});

// API-Endpunkt zum Neustarten des Servers
app.post('/api/restart-server', (req, res) => {
    // Logik zum Neustarten des Servers
    res.json({ message: 'Der Server wird neu gestartet.' });
});

// Starten des Servers
app.listen(3000, () => {
    console.log('Server läuft auf Port 3000');
});
