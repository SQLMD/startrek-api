module.exports = {
  // database connection configs
  db: {
    client: "pg",
    connection: {
      host: "127.0.0.1",
      database: "startrek"
    },
    port: 5432
  },

  // port for server to run on
  express: {
    port: 3000
  }
};
