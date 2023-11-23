"use-strict";

import  {PlankServer} from "./JsServer"


const app = new PlankServer();
const PORT = 8080;


app.RunServer(PORT, () => {
    console.log(`Server listen in http://127.0.0.1:${PORT}`);
});
