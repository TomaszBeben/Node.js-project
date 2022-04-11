import express from 'express';
import debug from 'debug';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const sessions = require('../data/sessions.json');

const adminRouter = express.Router();
adminRouter.route('/').get((req, res) => {
    const url = 'mongodb+srv://TomaszBebenDB:xN8geollYEJziw9l@tomaszbebendb.roga1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    const dbName = 'test';
    
    (async function mongo(){
        let client;
        try{
            client = await MongoClient.connect(url);
            debug('Conected to DB!!');

            const db = client.db(dbName)

            const response = await db.collection('sessions').insertMany(sessions);
            res.json(response)

        }catch(error){
            debug(error.stack)
        }
    }());
})

export default adminRouter;