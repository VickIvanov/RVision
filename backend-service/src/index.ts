const express = require('express');

const app = express();
const PORT = 8000;

app.get('/', (req: any, res: { send: (arg0: string) => any; }) => res.send('RVision'));

app.get('/api/', (req: any, res: { send: (arg0: string) => any; }) => res.send('API'));

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://127.0.0.1:${PORT}`);
});
