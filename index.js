"use strict";

import  {PlankServer} from "./lib/JsServer"


const app = new PlankServer();
const PORT = 8080;


app.router.get("/", () => {
    console.log("get");
});

app.router.get("/about", () => {
    console.log("get");
});

app.router.post("/form/{id:2}", (req, res) => {
    console.log("POST");
});



console.log(app.router.routes)





app.RunServer(PORT, () => {
    console.log(`Server listen in http://127.0.0.1:${PORT}`);
});
