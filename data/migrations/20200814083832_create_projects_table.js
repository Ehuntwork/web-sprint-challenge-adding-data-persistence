
exports.up = function(knex) {
    return knex.schema
        .createTable("projects", function(projects) {
            projects.increments("id");

            projects.string("name", 128).notNullable();
            projects.text("description").notNullable();
            projects.boolean("completed").defaultTo(false);
        })

        .createTable("resource", function(resource) {
            resource.increments("id");

            resource.string("name", 128).notNullable();
            resource.text("description");

            resource.integer("project_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("projects")
                .onDelete("RESTRICT")
                .onUpdate("CASCADE");
        })

        .createTable("task", function(task) {
            task.increments("id");

            task.text("description").notNullable();
            task.text("notes");
            task.boolean("completed").defaultTo(false);

            task.integer("project_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("projects")
                .onDelete("RESTRICT")
                .onUpdate("CASCADE");
        });
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists("projects")
        .dropTableIfExists("resource")
        .dropTableIfExists("task");
};

