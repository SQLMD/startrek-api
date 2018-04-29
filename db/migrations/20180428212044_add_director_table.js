exports.up = function(knex, Promise) {
  return knex.schema
    .hasTable("director")
    .then(exists => {
      if (!exists) {
        return knex.schema.createTable("director", table => {
          table.increments();

          // name
          table.text("name");
        });
      }
    })
    .then(() => {
      return knex.raw(
        "insert into director (name) select distinct director from episode_data_raw;"
      );
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("director");
};
