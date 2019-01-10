# ExpressPinoLogger
 A simple Node.js module that exposes a simple express middleware responsible for  Logging on every request.  

# Challenge 
At kudobuzz, logging is an important part of our infrastructure, we had initial wrapper around bunyan that provided utilities like, logging on every request. One of the most important things the request included in it logs was a request id. The id served as means to track a request that flows in our app. 
This id was also returned to the user in an  “X-REQUEST-ID”  on every response. The idea is that  the user can also have access to this id anytime he/she wants to report an error.

# Problem
Lately, bunyan has not been so active, we have decided that its time to use a new library called Pino. Pino has a similar api as bunyan so it should be easy to replace

# Solution
Lately, bunyan has not been so active, we have decided that its time to use a new library called Pino. Pino has a similar api as bunyan so it should be easy to replace

Pino is a very low overhead nodejs logger inspired by bunyan

