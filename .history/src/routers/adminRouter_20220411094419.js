import express from 'express';
import debug from 'debug';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const sessions = require('../data/sessions.json');

const adminRouter = express.Router();
adminRouter.route('/').get((req, res) => {
    const url = process.env.DB_CONNECTION;
    const client = new MongoClient(url)
    const dbName = 'test'
    
    (async function mongo(){
        
        try{
            await client.connect();
            debug('Conected to DB!!');

            const db = client.db(dbName)

            const response = await db.collection('session').insertMany(sessions);
            res.json(response)

        }catch(error){
            debug(error.stack)
        }
    }());
})

export default adminRouter;