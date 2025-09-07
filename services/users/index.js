const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Health check
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok", service: "users-service" });
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
  console.log(`Users Service running on port ${PORT}`);
});
