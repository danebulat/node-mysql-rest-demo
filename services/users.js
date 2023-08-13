import * as db from './db.js';
import * as helper from '../helper.js';
import config from '../config.js';


/* fetch page from database */
async function getMultiple(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);

  const sql = `
    SELECT id, first_name, last_name, email, dob, dept
    FROM users 
    LIMIT ${offset}, ${config.listPerPage};
  `;

  const rows = await db.query(sql);
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta,
  };
}


/* search for a single user */
async function search(id) {
  const rows = await db.callSpSearch(id);
  const data = helper.emptyOrRows(rows);

  return {data};
}


/* add new user to database */
async function create(user) {
  const sql = `
    INSERT INTO users (
        first_name, last_name, email, dob, dept
      )
    VALUES (
      '${user.first_name}',
      '${user.last_name}',
      '${user.email}',
      '${user.dob}',
      '${user.dept}'
    )
  `;
  
  const result = await db.query(sql);
  const message = result.affectedRows
    ? 'User created successfully'
    : 'Error in creating user';

  return {message};
}


/* update user in database */
async function update(id, user) {
  const sql = `
    UPDATE users 
    SET first_name = '${user.first_name}',
        last_name  = '${user.last_name}',
        email      = '${user.email}',
        dob        = '${user.dob}',
        dept       = '${user.dept}'
    WHERE id = ${id}
  `;

  const result = await db.query(sql);
  const message = result.affectedRows
    ? 'User updated successfully'
    : 'Error in updating user';

  return {message};
}


/* delete user from database */
async function remove(id) {
  const sql = `
    DELETE FROM users 
    WHERE id = ${id}
  `;

  const result = await db.query(sql);
  const message = result.affectedRows 
    ? 'User deleted successfully'
    : 'Error in deleting user';

  return {message};
}


/* exports */
export {
  getMultiple,
  create,
  update,
  remove,
  search,
};
