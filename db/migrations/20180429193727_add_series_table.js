exports.up = function(knex, Promise) {
  return knex.schema
    .hasTable("series")
    .then(exists => {
      if (!exists) {
        return knex.schema.createTable("series", table => {
          table.increments("id").primary();

          // name
          table
            .text("name")
            .notNullable()
            .unique();
        });
      }
    })
    .then(() => {
      return knex("series").insert([
        { name: "The Original Series" },
        { name: "The Next Generation" },
        { name: "Deep Space Nine" },
        { name: "Voyager" },
        { name: "Enterprise" },
        { name: "Discovery" },
        { name: "The Animated Series" }
      ]);
    })
    .catch(err => {
      console.log(err);
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("series");
};
