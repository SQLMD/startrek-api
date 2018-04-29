exports.up = function(knex, Promise) {
  return knex.schema
    .hasTable("teleplay_writer")
    .then(exists => {
      if (!exists) {
        return knex.schema.createTable("teleplay_writer", table => {
          table.increments();

          // name
          table.text("name");
        });
      }
    })
    .then(() => {
      return knex.raw(
        "insert into teleplay_writer (name) " +
          "select distinct teleplayby from episode_data_raw where teleplayby != '';"
      );
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("teleplay_writer");
};
