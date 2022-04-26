import express from 'express';
import debug from 'debug';

import { MongoClient, ObjectId } from 'mongodb';

import dotenv from 'dotenv';

const authRouter = express.Router()

authRouter.route('/signup').post((req, res) => {

    dotenv.config();
    const url = process.env.DB_CONNECTION;

    const dbName = 'test';

    async function addUser() {
        let client;
        try {
            client = await MongoClient.connect(url);

            const db = client.db(dbName);
            const user = { username, password };
            await db.collection('sessions').insertMany(sessions);
            const results = await db.collection('user').insertOne(user)
            debug(results)
            req.login(results.ops[0], () => {
                res.redirect('/auth/profile')
            })
        } catch (error) {
            debug(error)
        } finally {
            client.close()
        }
    };
    addUser();

})

authRouter.route('/profile').get((req, res) => {
    res.json(req.user)
})

export default authRouter;