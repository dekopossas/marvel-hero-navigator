const express = require('express');
require('dotenv').config();

const cors = require('cors');

const userRouter = require('./controllers/userController');

const app = express();

// const corsOptions = {
//   origin: 'https://localhost:3001',
//   method: 'GET,PUT,POST,DELETE',
// }

app.use(cors());

app.use(express.json());

const PORT = process.env.PORT || 3001;

app.use('/', userRouter);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));
