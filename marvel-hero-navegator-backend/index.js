const express = require('express');
require('dotenv').config();

const cors = require('cors');

const userRouter = require('./controllers/userController');

const app = express();

app.use(cors());

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use('/users', userRouter);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));
