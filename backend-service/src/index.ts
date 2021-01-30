import express from 'express';

const app = express();
const PORT = 8000;

app.get('/', (req, res) => {
  res.send('R-Vision API');
});

app.get('/api', (req, res) => {
  res.send('/');
});

app.listen(PORT, () => {
  return console.log(`server is listening on ${PORT}`);
});
