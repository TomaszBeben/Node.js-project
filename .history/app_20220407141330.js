import express from 'express';
import chalk from 'chalk';
import debug from 'debug';
import morgan from 'morgan';

const app = express();
const PORT = 8080;

app.use(morgan('tiny'));
app.use(express.static)

app.get('/', (req, res) => {
    res.send('ELO')
});

app.listen(PORT, () => {
    debug(chalk.green(`listening on port: ${PORT}`));
})