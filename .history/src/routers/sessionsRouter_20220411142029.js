import express from 'express';
import { createRequire } from 'module';
import debug from 'debug';
import { MongoClient } from 'mongodb';

const require = createRequire(import.meta.url);
const sessions = require('../data/sessions.json');
const sessionRouter = express.Router();

sessionRouter.route('/').get((req, res) => {
    dotenv.config();
    const url = process.env.DB_CONNECTION;

    const dbName = 'test';

    async function mongo(){
        let client;
        try{
            client = await MongoClient.connect(url);
            debug('Connected to DB!!');
            const db = client.db(dbName)
            await db.collection('sessions').insertMany(sessions);
            const response = await db.collection('sessions').find().toArray();
            return res.json(response)
        }catch(error){
            debug(error.stack)
        }finally{
            client.close()
        }
    };
    mongo();
    res.render('sessions', {
        sessions
    });
});

sessionRouter.route('/:id').get((req, res) => {
    const id = req.params.id;
    res.render('session', {
        session: sessions[id]
    });
});

export default sessionRouter;