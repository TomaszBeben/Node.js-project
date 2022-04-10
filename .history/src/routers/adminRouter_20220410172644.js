import express from 'express';
import debug from 'debug';
import mongodb from 'mongodb'


const adminRouter = express.Router();
debug(adminRouter);

export default adminRouter;