import express from 'express';
import debug from 'debug';
import mongodb from 'mongodb'


const adminRouter = express.Router();
adminRouter.route('/').get((req, res) => {
    
})

export default adminRouter;