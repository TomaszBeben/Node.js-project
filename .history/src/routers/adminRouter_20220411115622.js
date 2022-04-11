import express from 'express';
import debug from 'debug';

import { MongoClient } from 'mongodb';
import { createRequire } from 'module';

import dotenv from 'dotenv';

const require = createRequire(import.meta.url);
const sessions = require('../data/sessions.json');

const adminRouter = express.Router();

adminRouter.route('/').get((req, res) => {

    dotenv.config();
    const url = process.env.DB_CONNECTION;

    const dbName = 'test';

    async function mongo(){
        let client;
        try{
            client = await MongoClient.connect(url);
            debug('Connected to DB!!');
            const db = client.db(dbName)
            const request = await db.collection('sessions').insert(sessions);
            const response = await db.collection('sessions').find().toArray()

            return res.json(response)
        }catch(error){
            debug(error.stack)
        }
    };
    mongo();
})

export default adminRouter;