import express from 'express';
import debug from 'debug';

import { MongoClient, ObjectId } from 'mongodb';

const authRouter = express.Router()

authRouter.route('/signup').post((req, res) => {
    req.login(req.body, () => {
        res.redirect('/auth/profile')
    })
})

export default authRouter;