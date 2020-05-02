const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));


app.listen(port, () => console.log(`APP ---> http://localhost:${port}`));
