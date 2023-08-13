import 'dotenv/config';
import express from 'express';
import { router } from './routes/users.js';

const app = express();
const port = process.env.port || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


/* Default route */
app.get('/', (_req, res) => {
  res.json({ message: "ok" });
});


/* Users route */
app.use('/users', router);


/* Error handler middleware */
app.use((err, _req, res, _next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});


/* Start listening */
app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
