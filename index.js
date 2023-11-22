"use-strict";

import  {Router} from "./Router"


const app = new Router();
const PORT = 8080;


app.runServer(PORT, () => {
    console.log(`server on in port ${PORT}`);
})


