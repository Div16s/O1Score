import express from 'express';
import { router as matchRouter } from './routes/matches.js';

const app = express();
const PORT = 8000;

app.use(express.json());

app.get('/', (_req, res) => {
  res.json({ message: 'O1Score server is running.' });
});

app.use('/api/matches', matchRouter);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
