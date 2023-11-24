import net from 'net';
import { HttpStatusCode } from './StatusCodeHttp';
import { Router } from './Router';
import { parseRequests } from "./utils"

class PlankServer {
    constructor() {
        this.router = new Router();
    }

    RunServer(port = 8080, callback) {
        const server = net.createServer((socket) => {
            socket.on('data', (data) => {
                const requestData = data.toString();
                const req = parseRequests(requestData);
                const route = this.router.match(req);
                if (route) {
                    console.log(`Recibió algo ${route}`);
                    // No terminado
                    // logica del cliente
                    // \r\n necesarios por el estandar de http
                    socket.write(`HTTP/1.1 ${HttpStatusCode.OK}\r\nContent-Type: text/html\r\n\r\n<h1>${HttpStatusCode.OK} - OK</h1>`);
                } else {
                    // No terminado
                    // logica si no se encontro
                    socket.write(`HTTP/1.1 ${HttpStatusCode.NOT_FOUND}\r\nContent-Type: text/html\r\n\r\n<h1>${HttpStatusCode.NOT_FOUND} - Not Found</h1>`);
                }
                socket.end();
            });

            socket.on('error', (err) => {
                console.error('Error de conexión:', err);
            });
        });

        server.listen(port, () => {
            console.log("[+] Server on, create by Jakepys");
            if (callback) callback();
        });
    }
}

export {
    PlankServer,
};

