import express from 'express';
import cors from 'cors';
import { getMessageHandler } from './controllers/messages.js';

const PORT = 5001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.post('/messages', getMessageHandler);

app.listen(PORT, () => console.log(`Server was started on port ${PORT}`));
