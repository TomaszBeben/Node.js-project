import express from 'express';
import debug from 'debug';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv'


const adminRouter = express.Router();
adminRouter.route('/').get((req, res) => {
    const url = 'mongodb+srv://TomaszBebenDB:<password>@tomaszbebendb.roga1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    const dbName = 'TestingDB'
    MongoClient
})

export default adminRouter;