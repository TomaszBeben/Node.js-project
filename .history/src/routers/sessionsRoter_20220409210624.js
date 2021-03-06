import express from "express";
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