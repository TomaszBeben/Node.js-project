import express from 'express';
import debug from 'debug';
import { MongoClient } from 'mongodb'


const adminRouter = express.Router();
adminRouter.route('/').get((req, res) => {
    const url = 'mongodb+srv://TomaszBebenDB:<password>@tomaszbebendb.roga1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    MongoClient
})

export default adminRouter;