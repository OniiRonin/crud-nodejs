const express = require('express');
const app = express();
const itemsRoutes = require('./routes/itemsRoutes');

app.use(express.json()); // Middleware para parsear JSON
app.use('/items', itemsRoutes);

app.get("/", (req, res) => {
  res.send("server node-jean!");
});

module.exports = app;