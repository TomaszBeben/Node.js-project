const express = require('express');

const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
    res.send('ELO2')
});

app.listen(8080, () => {
    console.log(`listening on port: ${PORT}`);
})