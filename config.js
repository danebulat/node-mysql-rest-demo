const config = {
  
  /* database */
  db: {
    host: process.env.MYSQL_DEV_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    connectTimeout: 60_000,
    multipleStatements: true, /* for stored procedures */
  },

  /* misc */
  listPerPage: 10,
};

export default config;
export { config };
