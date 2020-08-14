const db = require("../data/db-config.js");

module.exports = {
    find,
    findById,
    insert
};

function find() {
    return db("resource");
}

function findById(params) {
    return db("resource").where(id = params).first();
}

function insert(project) {
    return (
        db("resource")
            .insert(project, 'id')
            .then(([id]) => get(id))
    );
}
