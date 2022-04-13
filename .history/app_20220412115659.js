import express from 'express';
import chalk from 'chalk';
import debug from 'debug';
import morgan from 'morgan';
import path from 'path';
import sessionRouter from './src/routers/sessionsRouter.js';
import adminRouter from './src/routers/adminRouter.js';
import authRouter from './src/routers/authRouter.js';
import passport from './src/config/passport'

import passport from 'passport';
import cookieParser from 'cookie-parser';
import session from 'express-session';

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = path.resolve();

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/'))); // index.html from public folder
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(session({secret: 'tomek', resave: true, saveUninitialized: true}));

// require('./src/config/passport.js')(app);

app.set('views', './src/views');
app.set('view engine', 'ejs');


app.use('/sessions', sessionRouter);
app.use('/admin', adminRouter);
app.use('/auth', authRouter);


app.get('/', (req, res) => {
    res.render('index')
});

app.listen(PORT, () => {
    console.log(chalk.green(`listening on port: ${PORT}`));
    debug(chalk.green(`listening on port: ${PORT}`));
});