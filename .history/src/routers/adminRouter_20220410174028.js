import express from 'express';
import debug from 'debug';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv'


const adminRouter = express.Router();
adminRouter.route('/').get((req, res) => {
    const url = process.env.DB_CONNECTION;
    const dbName = 'TestingDB'
    MongoClient
})

export default adminRouter;