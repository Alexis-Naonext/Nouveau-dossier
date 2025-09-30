const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// app.get('/api/salut', (req, res) => {
//   res.json({ message: 'Salut Alexis !' });
// });

// app.get('/api/bye', (req, res) => {
//   res.json({ message: 'bye Alexis !' });
// });

// app.listen(port, () => {
//   console.log(`Serveur lancé sur le port ${port}`);
// });


// Middleware qui intercepte toutes les requêtes
app.use((req, res) => {
  res.json({
    message: 'Requête reçue',
    methode: req.method,
    url: req.originalUrl,
    corps: req.body
  });
});

app.listen(port, () => {
  console.log(`Serveur lancé sur le port ${port}`);
});
