"use strict";

const  parseRequests = (requestData) => {
    /*
     *
     * Importante, no dejar los saltos de linea, ni retornos de carro,
     * Ejemplo de respuesta 
     *
     * HTTP/1.1 200 OK\r\n
     *  Content-Type: text/html\r\n
     * \r\n
     * <h1>¡Hola! Esta es una respuesta HTML</h1>\r\n
     *
     * */
    console.log("1", requestData)
    const removeReturnSCape = requestData.split("\r\n");
    console.log("2", removeReturnSCape)
    const [method, path, protocol] = removeReturnSCape[0].split(' ');
    console.log("3")
    console.log(method, path, protocol);

    const mapHeaders = {};
    for (let i = 1; i < removeReturnSCape.length; i++) {
        const [Akey, Lvalue] = requestData[i].split(': ');
        console.log({Akey, Lvalue})
        mapHeaders[Akey] = Lvalue;
    }

    console.log(mapHeaders)

     const request = {
        method: method || '',
        path: path || '/',
        protocol: protocol || '',
        headers: mapHeaders || {}
     };

    console.log(request);
}


export {
    parseRequests
}
