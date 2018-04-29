exports.up = function(knex, Promise) {
  return knex.schema
    .hasTable("story_writer")
    .then(exists => {
      if (!exists) {
        return knex.schema.createTable("story_writer", table => {
          table.increments();

          // name
          table.text("name");
        });
      }
    })
    .then(() => {
      return knex.raw(
        "insert into story_writer (name) select distinct storyby from episode_data_raw;"
      );
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("story_writer");
};
