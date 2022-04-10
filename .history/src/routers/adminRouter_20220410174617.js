import express from 'express';
import debug from 'debug';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

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
        }catch(error){
            debug(error.stack)
        }
    }());
})

export default adminRouter;