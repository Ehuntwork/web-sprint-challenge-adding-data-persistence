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
    return db("resource").where({project_id: params});
}

function insert(resource) {
    return (
        db("resource")
            .insert(resource, "id")
            .then(ids => {
                console.log(ids)
                return ids
            })
    );
}
