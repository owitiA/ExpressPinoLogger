import { resolve } from "path";
//import { createLogger } from "pino";
// use the ecpresspino logger serves the same as pino 
import {createLogger} from "express-pino-logger";

// favour using env variables to provide your code with external configs
// it makes it a lot simpler when you want to change the configs
const level = process.env.NODE_LOGGING_LEVEL || "info";


const log = createLogger({
  name: "myapp",
  streams: [
    {
      level,
      stream: process.stdout
    },
    {
      level,
      path: resolve(__dirname, "..", "..", "logs.json")
    }
  ]
});

export default log ;