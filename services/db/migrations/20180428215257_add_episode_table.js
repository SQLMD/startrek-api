exports.up = function(knex, Promise) {
  return knex.schema
    .hasTable("episode")
    .then(exists => {
      if (!exists) {
        return knex.schema.createTable("episode", table => {
          table.increments("id").primary();

          // name
          table.integer("series_id").notNullable();
          table.integer("season_id").notNullable();
          table.integer("number").notNullable();
          table.text("title").notNullable();
          table.text("star_date");
          table.date("air_date").notNullable;
          table.integer("director_id");
          table.integer("story_writer_id");
          table.integer("teleplay_writer_id");
        });
      }
    })
    .then(() => {
      return knex.raw(
        "insert into episode (series_id,season_id, number, title, star_date, air_date, director_id, story_writer_id, teleplay_writer_id) " +
          "select series, season, enum, title, stardate, airdate, d.id, s.id, t.id " +
          "from episode_data_raw as e left join director as d on d.name = e.director " +
          "left join story_writer as s on s.name = e.storyby " +
          "left join teleplay_writer as t on t.name = e.teleplayby " +
          "order by series, season, enum"
      );
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("episode");
};
