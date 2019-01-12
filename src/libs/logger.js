import { resolve } from "path";
//import { createLogger } from "pino";
// use the expresspino logger serves the same as pino 
//import {PinoWrapper} from "PinoWrapper";
import pinoWrapper from "../pinowrapper";

// favour using env variables to provide your code with external configs
// it makes it a lot simpler when you want to change the configs
const level = process.env.NODE_LOGGING_LEVEL || "info";


const log = pinoWrapper({
  name: "myapp",
  streams: [
    {
      level,
      stream: process.stdout
    },
    {
      level,
      path: resolve(__dirname, "..", "..", "logs.json")// not a suitable method for production
    }
  ]
});

export default log ;