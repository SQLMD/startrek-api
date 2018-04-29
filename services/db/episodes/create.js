module.exports = (knex, Episode) => {
  return params => {
    const seriesId = params.seriesId;
    const seasonId = params.seasonId;
    const number = params.number;
    const title = params.title;
    const starDate = params.starDate;
    const airDate = params.airDate;
    const directorId = params.directorId;
    const storyWriterId = params.storyWriterId;
    const teleplayWriterId = params.teleplayWriterId;

    return knex("episode")
      .insert({
        seriesId,
        seasonId,
        number,
        title,
        starDate,
        airDate,
        directorId,
        storyWriterId,
        teleplayWriterId
      })
      .returning("id")
      .then(id => {
        knex("episode")
          .where("id", id)
          .select();
      })
      .then(episode => new Episode(episode)) // create a episode model out of the plain database response
      .catch(err => {
        // sanitize known errors
        if (err.message.match("duplicate key value"))
          throw new Error("That episode already exists");

        // throw unknown errors
        throw err;
      });
  };
};
