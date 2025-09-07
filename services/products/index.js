const express = require("express");

const app = express();

app.use(express.json());


const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Welcome to the Products Service');
});


app.get("/health", (req, res) => {
    res.json({ status: "Products service is healthy" });
});


app.get("/products", (req, res) => {
  res.json([
    { id: 1, name: "Product A", price: 100 },
    { id: 2, name: "Product B", price: 150 },
    { id: 3, name: "Product C", price: 200 },
    { id: 4, name: "Product D", price: 250 },
    { id: 5, name: "Product E", price: 300 },
  ]);
});


app.listen(PORT, () => {
  console.log(`Products Service running on port ${PORT}`);
});
