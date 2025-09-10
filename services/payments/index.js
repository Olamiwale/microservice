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
app.get("/users", (req, res) => {
  res.json(
    [
      { id: 1, name: "John Doe"},
      { id: 2, name: "Paul Smith"},
      { id: 3, name: "Jane Doe"},
      { id: 4, name: "Alice Johnson"},
      { id: 5, name: "Bob Brown"}
    ]);
});

app.listen(PORT, () => {
  console.log(`Payment Service Portal running on port ${PORT}`);
});
