const express = require("express");

const app = express();

app.use(express.json());


const PORT = process.env.PORT || 3000;


app.get("/health", (req, res) => {
    res.json({ status: "Products service is healthy" });
});


app.get("/products", (req, res) => {
  res.json([
    { id: 1, name: "Product A", price: 100 },
    { id: 2, name: "Product B", price: 150 },
  ]);
});


app.listen(PORT, () => {
  console.log(`Products Service running on port ${PORT}`);
});
