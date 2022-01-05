const express = require("express");
const router = express.Router();
const fsPromises = require("fs").promises;
const path = require("path");

router.get("/", (req, res) => {
  res.render("login", { visibility: "hidden" });
});
router.post("/", async (req, res) => {
  const chosenUserIndex = users.findIndex(
    (user) => user.username === req.body.username
  );
  console.log(chosenUserIndex);
  if (chosenUserIndex >= 0) {
    if (users[chosenUserIndex].password === req.body.password) {
      users[chosenUserIndex].isLoggedIn = true;
      await fsPromises.writeFile(
        path.join(__dirname, "../models/users.json"),
        JSON.stringify(users)
      );
      console.log(users);
      res.redirect("userPanel");
    } else {
      res.render("login", { visibility: "block" });
    }
  } else {
    res.render("login", { visibility: "block" });
  }
});

module.exports = router;
