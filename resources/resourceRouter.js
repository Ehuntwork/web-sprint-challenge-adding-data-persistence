const express = require("express");

const db = require("../data/db-config.js");
const resource = require("./resource-model.js");
const router = express.Router();

router.get('/', (req, res) => {
    resource.find()
    .then(resources => {
      res.status(200).json(resources);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});


module.exports = router;