const config = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './db/data/priceboard.db',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './db/migrations',
    },
    seeds: {
      directory: './db/seeds',
    },
  },
};

export default config;
