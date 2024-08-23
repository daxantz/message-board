const express = require("express");
const app = express();
const PORT = 3000;
const path = require("path");

const indexRouter = require("./routes/index");
const newRouter = require("./routes/new");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);
app.use(newRouter);
app.listen(PORT, () => {
  console.log("Message board server is running on PORT: " + PORT);
});
