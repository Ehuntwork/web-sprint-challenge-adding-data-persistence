const express = require("express");

const db = require("../data/db-config.js");
const tasks = require("./tasks-model.js");
const router = express.Router();

router.get('/', (req, res) => {
    tasks.find()
    .then(task => {
      res.status(200).json(task);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});


module.exports = router;