const express = require('express');
const bodyParser = require('body-parser');

const PORT = 3001;

const app = express();
app.use(bodyParser.json());

app.use('/', userController);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));
