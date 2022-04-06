import express from 'express';
import chalk from 'chalk';
const debug =  require('debug')('app');

const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
    res.send('ELO')
});

app.listen(PORT, () => {
    debug(chalk.green(`listening on port: ${PORT}`));
})