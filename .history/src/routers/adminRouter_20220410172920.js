import express from 'express';
import debug from 'debug';
import { MongoClient } from 'mongodb'


const adminRouter = express.Router();
adminRouter.route('/').get((req, res) => {
    const url = 
    MongoClient
})

export default adminRouter;