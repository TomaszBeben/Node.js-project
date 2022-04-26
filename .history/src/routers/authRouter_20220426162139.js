import express from 'express';
import debug from 'debug';

import { MongoClient, ObjectId } from 'mongodb';

import dotenv from 'dotenv';

const authRouter = express.Router()

authRouter.route('/signup').post((req, res) => {

    dotenv.config();
    const url = process.env.DB_CONNECTION;

    const dbName = 'test';

    async function addUser(){
        let client;
        try{
            client = await MongoClient.connect(url);

            const db = client.db(dbName);
            const user = {username, password};
            const result = db.collection('user').insertOne(user)
            debug(result)
        }catch(error){
            debug(error)
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