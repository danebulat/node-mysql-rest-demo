import mysql from 'mysql2/promise';
import config from '../config.js';

/* execute a query and return results */
async function query(sql, params) {
  const connection = await mysql.createConnection(config.db);
  const [results, ] = await connection.execute(sql, params);

  return results;
}

/* call stored procedure */
async function callSpSearch(id) {
  const connection = await mysql.createConnection(config.db);
  const sql = `CALL sp_search_users_by_id(${id})`;

  const [results, ] = await connection.execute(sql);
  return results;
}

/* exports */
export {
  query,
  callSpSearch,
};
