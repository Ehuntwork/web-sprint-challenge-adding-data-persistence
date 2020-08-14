const db = require("../data/db-config.js");

module.exports = {
    find,
    findById,
    insert
};

function find() {
    return db("projects");
}

function findById(params) {
    return db("projects").where(id = params).first();
}

function insert(project) {
    return (
        db("projects")
            .insert(project)
    );
}