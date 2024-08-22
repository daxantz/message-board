const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello message board");
});

app.listen(PORT, () => {
  console.log("Message board server is running on PORT: " + PORT);
});
