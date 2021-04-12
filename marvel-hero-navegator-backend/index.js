const express = require('express');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.use('/', userController);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));
