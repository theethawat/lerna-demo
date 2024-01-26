import express from "express";
import { WORKING_STATUS } from "@theethawat/lerna-demo-constant";

const app = express();

app.get("/", (req, res) => {
  console.log("Working Status List", WORKING_STATUS);
  res.send("Hello World!");
});

app.listen(3001, () => {
  console.log("Example app listening on port 3001!");
});
