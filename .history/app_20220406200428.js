const express = require('express');
const chalk = require('chalk');

const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
    res.send('ELO')
});

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
})