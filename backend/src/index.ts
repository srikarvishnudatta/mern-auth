import express from "express";
import * as dotenv from "dotenv";
import userRouter from "./routes/user.route";
import authRouter from "./routes/auth.route";
const app = express();

// all middleware
app.use(express.json());
dotenv.config();

// all routes
app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

app.listen(process.env.PORT, ()=>{
    console.log(`Running on port ${process.env.PORT}`);
});