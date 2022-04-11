import express from 'express';
import debug from 'debug';

import { MongoClient, ObjectId } from 'mongodb';

const authRouter = express.Router()

authRouter.route('/signup').post((req, res) => {
    res.json(req.body)
})

export default authRouter;