import express from 'express';
import debug from 'debug';

import { MongoClient, ObjectId } from 'mongodb';

const authRouter = express.Router()

authRouter.route('/signup').post

export default authRouter;