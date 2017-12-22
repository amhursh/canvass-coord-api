// Update with your config settings.
module.exports = {

  development: {
    client: 'pg',
    connection:'postgres://localhost/canvass_coord_api',
    migrations: {
      directory: './server/db/migrations'
    },
    seeds: {
      directory: './server/db/seeds/dev'
    },
    useNullAsDefault: true
  },

  test: {
    client: 'pg',
    connection:'postgres://localhost/canvass_coord_api_test',
    migrations: {
      directory: './server/db/migrations'
    },
    seeds: {
      directory: './server/db/seeds/test'
    },
    useNullAsDefault: true
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './server/db/migrations'
    },
    seeds: {
      directory: './server/db/seeds/production'
    },
    useNullAsDefault: true
  }

}
