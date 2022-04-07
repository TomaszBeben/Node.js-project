import express from 'express';
import chalk from 'chalk';
import debug from 'debug';
import morgan from 'morgan';
import path from 'path';

const app = express();
const PORT = 8080;

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname)))

app.get('/', (req, res) => {
    res.send('ELO')
});

app.listen(PORT, () => {
    debug(chalk.green(`listening on port: ${PORT}`));
})