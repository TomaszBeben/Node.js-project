import express from 'express';
import chalk from 'chalk';
import debug from 'debug';
import morgan from 'morgan';
import path from 'path';
import sessionRouter from './src/routers/sessionsRouter.js'
import adminRouter from './src/routers/adminRouter.js'
import adminRouter from './src/routers/authRouter.js'

const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = path.resolve();

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/'))); // index.html from public folder

app.set('views', './src/views');
app.set('view engine', 'ejs');


app.use('/sessions', sessionRouter);
app.use('/admin', adminRouter);


app.get('/', (req, res) => {
    res.render('index')
});

app.listen(PORT, () => {
    console.log(chalk.green(`listening on port: ${PORT}`));
    debug(chalk.green(`listening on port: ${PORT}`));
});