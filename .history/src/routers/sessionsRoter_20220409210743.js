import express from 'express';
const __dirname = path.resolve();
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

module.exports = sessionRouter;