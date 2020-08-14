const db = require("../data/db-config.js");

module.exports = {
    find,
    findById,
};

function find() {
    return db("task");
}

function findById(params) {
    return db("task").where(id = params).first();
}


