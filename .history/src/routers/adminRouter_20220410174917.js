import express from 'express';
import debug from 'debug';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import { Collection } from 'mongoose';

const require = createRequire(import.meta.url);
const sessions = require('../data/sessions.json');

const adminRouter = express.Router();
adminRouter.route('/').get((req, res) => {
    const url = process.env.DB_CONNECTION;
    const dbName = 'TestingDB'
    
    (async function mongo(){
        let client;
        try{
            client = await MongoClient.connect(url);
            debug('Conected to DB!!');

            const db = client.db(dbName)

            const response = await db.collection('sessions').insertMany(sessions);
            res.

        }catch(error){
            debug(error.stack)
        }
    }());
})

export default adminRouter;