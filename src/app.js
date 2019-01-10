import express from "express";
const app = express();
import {requests} from "./lib/requests";
import { info } from "./lib/logger";

app.get("/", (req, res) => {
  info("/ query", { query: req.query });
// find user id in logs for reuse 
  info("Finding request id", { q: req.query.pid });
  const foundRequest = requests.findRequestId(req.query.pid);
  info("request found", { foundRequest });

   const msg = {
   pid : foundRequest  && foundRequest.pid ,
   foundRequest: !!foundRequest
  };
  
  info("/ response", msg);
  res.json(msg);
});

export default app;