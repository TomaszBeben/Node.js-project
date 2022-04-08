import express from 'express';
import chalk from 'chalk';
import debug from 'debug';
import morgan from 'morgan';
import path from 'path';
import { createRequire } from 'module';

const require = createRequire(import.meta.url)
const sessions = require('./src/data/sessions.json')

const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = path.resolve()
const sessionRouter = express.Router()

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/'))) // index.html prom public folder

app.set('views', './src/views');
app.set('view engine', 'ejs')

sessionRouter.route('/').get((req, res) => {
    res.render('sessions', {
        sessions,
    })
})

sessionRouter.route('/1').get((req, res) => {
    res.send('single session')
})

app.use('/sessions', sessionRouter)
app.get('/', (req, res) => {
    res.render('index', { title: 'my first view engined file', data: ['a', 'b', 'c'] })
});

app.listen(PORT, () => {
    console.log(chalk.green(`listening on port: ${PORT}`));
    debug(chalk.green(`listening on port: ${PORT}`));
})