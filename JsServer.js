"use-strict"


import {createServer} from "node:http"
import {HttpStatusCode} from "./StatusCodeHttp"
import {Router} from "./Router"


// console.log(HttpStatusCode)


class PlankServer {
    constructor() {
        this.router = new Router();
    }

    RunServer(port = 8080, callback) {
        const initServer = createServer((req, res) => {
            const route = this.router.match(req);
            if(route) {
                console.log(`Recogio algo ${route}`);
            } else {
                res.writeHead(HttpStatusCode.NOT_FOUND, {
                    'Content-Type': 'text/html',
                });
                res.end(`<h1>${HttpStatusCode.NOT_FOUND} - Not Found</h1>`);
            }
        });

        console.log("[+] Server on, create by Jakepys");
        initServer.listen(port, callback);
    }
}

export {
    PlankServer,
}
