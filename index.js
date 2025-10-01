const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// app.get("/GSM/getdatetime", (req, res) => {   
//   const currentDate = new Date();
//   res.json({ datetime: currentDate.toISOString() });
// });

// app.get("/GSM/getpublickey", (req, res) => {
//   const public = "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAzV7b4t3mFv6+X9y5jv1b\nqZl5H3F5Zl5H3F5Zl5H3F5Zl5H3F5Zl5H3F5Zl5H3F5Zl5H3F5Zl5H3F5Zl5H3F5Z\nl5H3F5Zl5H3F5Zl5H3F5Zl5H3F5Zl5H3F5Zl5H3F5Zl5H3F5Zl5H3F5Zl5H3F5Zl\n-----END PUBLIC KEY-----";
//   res.json({ publicKey: public });
// });

// app.get("/api/getdatetime", (req, res) => {
//   const currentDate = new Date();
//   res.json({ datetime: currentDate.toISOString() });
// });

// app.post("/GSM/injectdata", (req, res) => {
//   const data = req.body;
//   console.log("Données reçues :", data);
//   res.json({ message: "Données reçues avec succès", receivedData: data });
// });

// app.post("/api/testPOST", (req, res) => {
//   const data = req.body;
//   console.log("Données reçues :", data);
//   res.json({ message: "Données reçues avec succès", receivedData: data });
// });



// app.listen(port, () => {
//   console.log(`Serveur lancé sur le port ${port}`);
// }); 




// Middleware qui intercepte toutes les requêtes
    app.use((req, res) => {
      res.send(`
        <html>
          <head>
            <title>Requête reçue</title>
            <meta http-equiv="refresh" content="2">
            <style>
              body { font-family: Arial, sans-serif; padding: 20px; }
              h1 { color: #333; }
              p { margin: 5px 0; }
              .label { font-weight: bold; }
            </style>
          </head>
          <body>
            <h1>Requête reçue</h1>
            <p><span class="label">Méthode :</span> ${req.method}</p>
            <p><span class="label">URL :</span> ${req.originalUrl}</p>
            <p><span class="label">Corps :</span> ${JSON.stringify(req.body)}</p>
            <p><em>Cette page se met à jour toutes les 2 secondes.</em></p>
          </body>
        </html>
      `);


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
