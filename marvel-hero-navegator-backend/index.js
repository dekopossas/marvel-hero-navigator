const express = require('express');
const userController = require('./controllers/userController');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.use('/', userController);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));
