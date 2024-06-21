import express from "express";

import globalErrorHandler from "./middlewares/globalErrorHandler";

const app = express();

// Routes
// http methods :  get ,post put, patch, delete
app.get("/", (req, res, next) => {
  //   const error = createHttpError(400, "something went WRong");
  //   throw error;
  res.json({ message: "Welcom to E_LIB_API" });
});

// global error handlers should be after all routes you define
app.use(globalErrorHandler); // express will call this we dont have to

export default app;
