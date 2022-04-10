import express from 'express';
import debug from 'debug';


const adminRouter = express.Router();
debug(adminRouter);

export default adminRouter;