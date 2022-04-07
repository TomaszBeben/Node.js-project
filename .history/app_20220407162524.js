import express from 'express';
import chalk from 'chalk';
import debug from 'debug';
import morgan from 'morgan';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = path.resolve()

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')))

app.set('views', './src/views');
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index', {title: 'my first view engined file'})
});

app.listen(PORT, () => {
    console.log(chalk.green(`listening on port: ${PORT}`));
    debug(chalk.green(`listening on port: ${PORT}`));
})