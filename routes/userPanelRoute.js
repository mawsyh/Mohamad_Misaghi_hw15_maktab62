const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("userPanel", { username: users[0].username });
});

module.exports = router;
