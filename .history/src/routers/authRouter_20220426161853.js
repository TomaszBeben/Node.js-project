import express from 'express';
import debug from 'debug';

import { MongoClient, ObjectId } from 'mongodb';

const authRouter = express.Router()

authRouter.route('/signup').post((req, res) => {

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

    req.login(req.body, () => {
        res.redirect('/auth/profile')
    })
})

authRouter.route('/profile').get((req, res) => {
    res.json(req.user)
})

export default authRouter;