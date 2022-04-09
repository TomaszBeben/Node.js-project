import express from 'express';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const sessions = require('./src/data/sessions.json');
const sessionRouter = express.Router();

sessionRouter.route('/').get((req, res) => {
    res.render('sessions', {
        sessions
    });
});

sessionRouter.route('/:id').get((req, res) => {
    const id = req.params.id;
    res.render('session', {
        session: sessions[id]
    });
});

export default sessionRouter;