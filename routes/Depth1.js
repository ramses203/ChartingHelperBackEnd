const express = require("express");
const router = express.Router();
const db = require("../config/db");

router.post("/test", (req, res) => {
  console.log("testtesttes");
  res.send("test");
});

module.exports = router;
