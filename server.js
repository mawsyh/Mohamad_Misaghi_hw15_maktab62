const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require("path");
const port = 4000;
const serverRouter = require("./routes/serverRouter");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join("public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
mongoose.connect('mongodb://127.0.0.1:27017/userDB');
app.use("/", serverRouter);


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
