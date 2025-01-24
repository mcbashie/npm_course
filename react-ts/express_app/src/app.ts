import express from 'express';
import { morningGreet } from '@mcbash/learning-npm';

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const greet = morningGreet('express');
  res.send("Hello World " + greet);
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
