import express from 'express';
import chalk from 'chalk';
import debug from 'debug';
import morgan from 'morgan';
import path from 'path';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const sessionRouter = require('./src/routers/sessionsRoter.js')

const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = path.resolve();

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/'))); // index.html from public folder

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use('/sessions', sessionRouter);
app.get('/', (req, res) => {
    res.render('index', { title: 'my first view engined file', data: ['a', 'b', 'c'] })
});

app.listen(PORT, () => {
    console.log(chalk.green(`listening on port: ${PORT}`));
    console.log(sessionsRouter);
    debug(chalk.green(`listening on port: ${PORT}`));
});