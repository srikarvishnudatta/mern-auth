import express from "express";
import UserHandler from "../handlers/UserHandler";

const userRouter = express.Router();

userRouter.get('/', UserHandler);


export default userRouter;