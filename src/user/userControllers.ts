import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  // jo bhi response ayega usse hm get kr skte hai in => req.body m milega
  // you can also console.log() = > what is been return in body
  // console.log("reqdata", req.body);
  // return res.json({});
  const { name, email, password } = req.body;

  // validation ...

  if (!name || !email || !password) {
    const error = createHttpError(400, "All fields are required ");
    return next(error);
  }

  // now we need to check if there is already a username in a databse exist
  // database call

  // process

  // response

  res.json({ message: "User created" });
};

export { createUser };
