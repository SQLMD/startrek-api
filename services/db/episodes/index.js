class Episode {
  constructor(dbEpisode) {
    this.id = dbEpisode.id;
    this.seriesId = dbEpisode.series_id;
    this.seasonId = dbEpisode.season_id;
    this.number = dbEpisode.number;
    this.title = dbEpisode.title;
    this.starDate = dbEpisode.star_date;
    this.airDate = dbEpisode.air_date;
    this.directorId = dbEpisode.director_id;
    this.storyWriterId = dbEpisode.story_writer_id;
    this.teleplayWriterId = dbEpisode.teleplay_writer_id;
  }

  serialize() {
    return {
      id: this.id,
      seriesId: this.seriesId,
      seasonId: this.seasonId,
      number: this.number,
      title: this.title,
      starDate: this.starDate,
      airDate: this.airDate,
      directorId: this.directorId,
      storyWriterId: this.storyWriterId,
      teleplayWriterId: this.teleplayWriterId
    };
  }
}

module.exports = knex => {
  return {
    create: require("./create")(knex, Episode)
    //list: require("./list")(knex, Episode)
  };
};
