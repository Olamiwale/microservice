const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Health check
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok", service: "users-service" });
});


app.get("/", (req, res) => {
  res.send("Welcome to the Payment Service Portal");
});
  
// Example route
app.get("/payments", (req, res) => {
  res.json(
    [
      { id: 1, name: "John Doe", amount: 100.00, status: "completed", method: "credit_card", date: "2023-10-01" },
      { id: 2, name: "Paul Smith", amount: 50.00, status: "pending", method: "paypal", date: "2023-10-02" },
      { id: 3, name: "Jane Doe", amount: 75.50, status: "failed", method: "bank_transfer", date: "2023-10-03" },
      { id: 4, name: "Alice Johnson", amount: 200.00, status: "completed", method: "credit_card", date: "2023-10-04" },
      { id: 5, name: "Bob Brown", amount: 120.00, status: "completed", method: "paypal", date: "2023-10-05" },
    
    ]);
});

app.listen(PORT, () => {
  console.log(`Payment Service Portal running on port ${PORT}`);
});
