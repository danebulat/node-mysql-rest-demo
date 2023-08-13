import express from 'express';
import * as users from '../services/users.js';

const router = express.Router();


/* GET users */
router.get('/', async (req, res, next) => {
  try {
    const rows = await users.getMultiple(req.query.page);
    res.json(rows);
  } 
  catch (err) {
    console.error(`Error while getting users ${err.message}`);
    next(err);
  }
});


/* GET user by id */
router.get('/:id', async (req, res, next) => {
  try {
    const row = await users.search(req.params.id);
    res.json(row);
  }
  catch (err) {
    console.error(`Error while searching user ${err.message}`);
    next(err);
  }
});


/* POST user */
router.post('/', async (req, res, next) => {
  try {
    const message = await users.create(req.body);
    res.json(message);
  }
  catch (err) {
    console.error(`Error while creating user`, err.message);
    next(err);
  }
});


/* PUT user */
router.put('/:id', async (req, res, next) => {
  try {
    const message = await users.update(req.params.id, req.body);
    res.json(message);
  }
  catch (err) {
    console.error(`Error while updating user ${err.message}`);
    next(err);
  }
});


/* DELETE user */
router.delete('/:id', async (req, res, next) => {
  try {
    const message = await users.remove(req.params.id);
    res.json(message);
  }
  catch (err) {
    console.error(`Error while deleting user ${err.message}`);
    next(err);
  }
});


/* exports */
export {  
  router,
};
