import express from "express";

const app = express();

// Routes
// http methods :  get ,post put, patch, delete
app.get("/", (req, res, next) => {
  res.json({ message: "Welcom to E_LIB_API" });
});

export default app;
