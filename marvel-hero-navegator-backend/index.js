const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');

const PORT = process.env.PORT;

const app = express();
app.use(bodyParser.json());

app.use('/', userController);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));
