import express from "express";

import globalErrorHandler from "./middlewares/globalErrorHandler";
import userRouter from "./user/userRouter";
// import createHttpError from "http-errors";

const app = express();
app.use(express.json()); // for json parsing

// Routes
// http methods :  get ,post put, patch, delete
app.get("/", (req, res, next) => {
  // const error = createHttpError(400, "something went WRong"); // this for testing if the global error handler is working or not
  // throw error;
  res.json({ message: "Welcom to E_LIB_API" });
});

app.use("/api/users", userRouter);
// global error handlers should be after all routes you define
app.use(globalErrorHandler); // express will call this we dont have to

export default app;
