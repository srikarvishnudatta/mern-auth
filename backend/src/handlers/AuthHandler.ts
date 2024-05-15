import { Response, Request } from "express-serve-static-core";

import { UserType } from "../db/models/UserSchema";
import { addUser, connectDB } from "../db/db";

export default function SignUpHandler(
  request: Request<{}, {}, UserType>,
  response: Response
) {
  const { username, email, password } = request.body;
  connectDB().then(() => console.log("connected to db successfully"));
  addUser({ username, email, password })
    .then(() => response.status(201).json("created successfully"))
    .catch((err) => response.status(401).json('user already exists'));
}
