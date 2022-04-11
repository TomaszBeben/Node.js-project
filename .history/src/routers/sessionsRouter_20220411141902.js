import express from 'express';
import { createRequire } from 'module';
import debug from 'debug';
import { MongoClient } from 'mongodb';

const require = createRequire(import.meta.url);
const sessions = require('../data/sessions.json');
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