// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: "./data/lambda.db3"
    },
    migrations: {
	// by adding this, the knex migrations will be created in the data folder in their own migrations folder
	directory: "./data/migrations"
    },
    seeds: {
	// by adding this, the knex seeds will be created in the data folder in their own seeds folder
	directory: "./data/seeds"
    },

    // sqlite gotcha with foreign keys
    pool: {
	// runs after a connection is made to the sqlite engine
	afterCreate: (conn, done) => {
	    conn.run("PRAGMA foreign_keys = ON", done);
	}	
    }
  }
};
