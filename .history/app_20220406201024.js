import express from 'express';
import chalk from 'chalk';

const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
    res.send('ELO')
});

app.listen(PORT, () => {
    console.log(`${chalk.green('listening on port: ')} ${chalk.green(PORT)}`);
})