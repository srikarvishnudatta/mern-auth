import express from "express";
import SignUpHandler from "../handlers/AuthHandler";

const authRouter = express();

authRouter.post('/signup', SignUpHandler);

export default authRouter;