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

app.get("/GSM/getdatetime", (req, res) => {
  const currentDate = new Date();
  res.json({ datetime: currentDate.toISOString() });
});

app.get("/GSM/getpublickey", (req, res) => {
  const public = "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAzV7b4t3mFv6+X9y5jv1b\nqZl5H3F5Zl5H3F5Zl5H3F5Zl5H3F5Zl5H3F5Zl5H3F5Zl5H3F5Zl5H3F5Zl5H3F5Z\nl5H3F5Zl5H3F5Zl5H3F5Zl5H3F5Zl5H3F5Zl5H3F5Zl5H3F5Zl5H3F5Zl5H3F5Zl\n-----END PUBLIC KEY-----";
  res.json({ publicKey: public });
});

app.post("/GSM/injectdata", (req, res) => {
  const data = req.body;
  console.log("Données reçues :", data);
  res.json({ message: "Données reçues avec succès", receivedData: data });
});

app.post("/api/testPOST", (req, res) => {
  const data = req.body;
  console.log("Données reçues :", data);
  res.json({ message: "Données reçues avec succès", receivedData: data });
});

app.get("/api/getdatetime", (req, res) => {
  const currentDate = new Date();
  res.json({ datetime: currentDate.toISOString() });
});

app.listen(port, () => {
  console.log(`Serveur lancé sur le port ${port}`);
}); 




// Middleware qui intercepte toutes les requêtes
    // app.use((req, res) => {
    //   res.json({
    //     message: 'Requête reçue',
    //     methode: req.method,
    //     url: req.originalUrl,
    //     corps: req.body
    //   });
    // });

    // app.listen(port, () => {
    //   console.log(`Serveur lancé sur le port ${port}`);
    // });
