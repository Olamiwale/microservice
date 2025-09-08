const express = require("express");


const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Welcome to the Orders Service");
});


app.get("/health", async (req, res) => {
  res.status(200).json({ status: "ok", service: "orders-service" });
});


app.get("/orders", async (req, res) => {
  res.json([
    { id: 1, item: "Laptop", quantity: 1, price: 1200 },
    { id: 2, item: "Phone", quantity: 2, price: 800 },
    { id: 3, item: "Headphones", quantity: 1, price: 150 },
    { id: 4, item: "Monitor", quantity: 2, price: 600 },
    { id: 5, item: "Keyboard", quantity: 1, price: 100 },
    
    ]);
    
  });


app.listen(PORT, () => {
  console.log(`Orders service running on port ${PORT}`);
});