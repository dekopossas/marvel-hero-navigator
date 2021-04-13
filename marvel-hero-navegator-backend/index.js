const express = require('express');
require('dotenv').config();

const cors = require('cors');

const userRouter = require('./controllers/userController');

const app = express();

const corsOptions = {
  origin: 'https://localhost:3000',
  method: 'GET,PUT,POST,DELETE',
}

app.use(cors(corsOptions));

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use('/users', userRouter);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));
