const e = require("express");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());


app.get("/", (req, res) => {
  res.send("Welcome to the Users Service");
});


app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok", service: "users-service" });
});


app.get("/users", (req, res) => {
  res.json(
    [
      { id: 1, name: "John Doe", email: "johnDoe@mail.com", age: 30, role: "admin"},
      { id: 2, name: "Paul Smith", email: "paulSmith@mail.com", age: 25, role: "user"},
      { id: 3, name: "Jane Doe", email: "janeDoe@mail.com", age: 28, role: "user"},
      { id: 4, name: "Alice Johnson",email: "aliceJohnson@mail.com", age: 32, role: "user"},
      { id: 5, name: "Bob Brown", email: "bobBrown@mail.com",  age: 22, role: "user"},
      
    ]);
});

app.listen(PORT, () => {
  console.log(`Users Service running on port ${PORT}`);
});
