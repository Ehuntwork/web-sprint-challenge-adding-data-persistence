const express = require("express");

const db = require("../data/db-config.js");
const projects = require("./projects-model.js");
const resource = require("../resources/resource-model.js");

const router = express.Router();

router.get('/', (req, res) => {
    projects.find()
    .then(project => {
      res.status(200).json(project);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.get('/:id', (req, res) => {
    projects.findById(req.params)
    .then(project => {
        console.log(req.params)
        if (project) {
             res.json(project);
        } else {
             res.status(404).json({
                message: "Could not find project with given id.",
            });
        }
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to get project" });
    });
});

router.post('/', (req, res) => {
    projects.insert(req.body)
    .then(project => {
        res.status(201).json(project)
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to POST project" });
    });
});


router.post('/:id/resource', (req, res) => {
    resource.insert({name: req.body.name, description: req.body.description, project_id: req.params.id})
    .then(project => {
        res.status(201).json(project)
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to POST project", error: err, request: req.body });
    });
});
module.exports = router;
  