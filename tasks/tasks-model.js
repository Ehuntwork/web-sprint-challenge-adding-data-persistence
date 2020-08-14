const db = require("../data/db-config.js");

module.exports = {
    find,
    findById,
    insert
};

function find() {
    return db("task");
}

function findById(params) {
    return db("task").where({project_id: params});
}

function insert(task) {
    return (
        db("task")
            .insert(task, "id")
            .then(ids => {
                console.log(ids)
                return ids
            })
    );
}

