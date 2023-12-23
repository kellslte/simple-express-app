import express from 'express'
import { createServer } from 'http'

// create an application
const app = express();

// create the server for our app
const server = createServer( app );

// create application routes
app.use( "/", function (req, res, next)
{
    return res.status( 200 ).json( {
        message: "You application is awake!"
    })   
} );

// start the server and make it listen on a port

server.listen(3098, () => console.info('Your application is running'));